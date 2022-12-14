import { Container, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export type TwoPanelLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export const TwoPanelLayout = ({ left, right }: TwoPanelLayoutProps) => (
  <Container maxW="4xl">
    <Stack
      direction={{ base: "column", md: "row" }}
      justify="center"
      mt="8"
      spacing="8"
    >
      {left}
      {right}
    </Stack>
  </Container>
);
