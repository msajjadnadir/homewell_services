import PropTypes from "prop-types";
import { useEffect, useCallback, Suspense } from "react";

import { paths } from "@/routes/paths";
import { useRouter } from "@/routes/hooks";

// import { SplashScreen } from 'src/components/loading-screen';

import { useAuth } from "../hook/useAuth";
import useAuthStore from "../store/useAuthStore";
// ----------------------------------------------------------------------

export default function GuestGuard({ children }) {
  const { isLoading } = useAuthStore();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>{children}</Container>
    </Suspense>
  );
}

GuestGuard.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function Container({ children }) {
  const router = useRouter();

  // const searchParams = useSearchParams();

  const returnTo = paths.dashboard.root;

  const { isAuthenticated } = useAuthStore();

  const check = useCallback(() => {
    if (isAuthenticated) {
      router.replace(returnTo);
    }
  }, [isAuthenticated, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}

Container.propTypes = {
  children: PropTypes.node,
};
