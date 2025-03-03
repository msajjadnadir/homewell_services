import PropTypes from "prop-types";
import { useState, useEffect, useCallback, Suspense } from "react";

import { paths } from "@/routes/paths";
import { useRouter } from "@/routes/hooks";

// import { SplashScreen } from '@/components/loading-screen';

import useAuthStore from "../store/useAuthStore";

// ----------------------------------------------------------------------

const loginPath = paths.auth.login;

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>{children}</Container>
    </Suspense>
  );
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function Container({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isAuthenticated && typeof window !== "undefined") {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const href = `${loginPath}?${searchParams}`;
      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}

Container.propTypes = {
  children: PropTypes.node,
};
