import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, RenderResult, render } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import { theme } from "../theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: () => {
      /* do nothing */
    },
    warn: () => {
      /* do nothing */
    },
    error: () => {
      /* do nothing */
    },
  },
});

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <MemoryRouter>{children}</MemoryRouter>
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
