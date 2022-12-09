import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Flex, Stack, Card } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";

import { NavButton } from ".";

export type Page = {
  path: string;
  title: string;
  element: ReactNode;
};

export type SidebarLayoutProps = {
  pages: Array<Page>;
};

export const SidebarLayout = ({ pages }: SidebarLayoutProps) => (
  <Flex w="full" direction={{ base: "column", md: "row" }}>
    <Card as="aside" flex="1" p={4}>
      <Stack spacing={4}>
        {pages.map(({ path, title }) => (
          <NavButton icon={FaLink} to={path} key={path}>
            {title}
          </NavButton>
        ))}
      </Stack>
    </Card>
    <Flex flex="4" m="8">
      <Routes>
        {pages.map(({ path, element }) => (
          <Route path={path} key={path} element={element} />
        ))}
      </Routes>
    </Flex>
  </Flex>
);
