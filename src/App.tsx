import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { FC } from "react";

import { useCsrfToken } from "./auth/services/useCsrfToken";

export const App: FC = () => {
  useCsrfToken();

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};
