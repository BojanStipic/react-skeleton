import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
  createMemoryHistory,
} from "@tanstack/react-router";
import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";

import { theme } from "../theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const rootRoute = new RootRoute();
  const componentRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => children,
  });
  const router = new Router({
    routeTree: rootRoute.addChildren([componentRoute]),
    history: createMemoryHistory(),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
