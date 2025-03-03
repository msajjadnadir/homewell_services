import useAuthStore from "../store/useAuthStore";

export function useAuth() {
  const { user, token, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = async (email, password) => {
    try {
      const response = await loginAPI(email, password);
      const { user, token } = response.data;
      login(user, token);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAPI(); // Optional: call logout API
      logout();
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      return false;
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
}
