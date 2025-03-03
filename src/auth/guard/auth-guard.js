import PropTypes from "prop-types";
import { useState, useEffect, useCallback, Suspense } from "react";

import { paths } from "@/routes/paths";
import { useRouter } from "@/routes/hooks";

// import { SplashScreen } from '@/components/loading-screen';

import { useAuth } from "../hook/useAuth";
import useAuthStore from "../store/useAuthStore";

// ----------------------------------------------------------------------

const loginPath = paths.auth.login;

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const { isLoading } = useAuthStore();

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

  const check = useCallback(() => {
    if (isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const href = `${loginPath}?${searchParams}`;

      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}

Container.propTypes = {
  children: PropTypes.node,
};
