import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { FC } from "react";

import { Footer, Header } from ".";

export const GlobalLayout: FC = () => (
  <Stack minH="100vh" spacing={8}>
    <Header />
    <Box as="main" flex={1}>
      <Outlet />
    </Box>
    <Footer />
  </Stack>
);
