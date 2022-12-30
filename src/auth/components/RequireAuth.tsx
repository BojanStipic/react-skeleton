import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthenticatedUser } from "..";

export type RequireAuthProps = {
  children: ReactNode;
};

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useAuthenticatedUser();

  if (isUserLoading) {
    return null;
  }

  if (isUserError || !user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
