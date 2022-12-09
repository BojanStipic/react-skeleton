import { ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";

import { Header, Footer } from "./";

export type GlobalLayoutProps = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: GlobalLayoutProps) => (
  <Stack minH="100vh" spacing={8}>
    <Header />
    <Box as="main" flex={1}>
      {children}
    </Box>
    <Footer />
  </Stack>
);
