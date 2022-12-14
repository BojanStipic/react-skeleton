import { useState } from "react";
import {
  Flex,
  Stack,
  Card,
  Heading,
  IconButton,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaLink,
  FaSignInAlt,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NavButton } from ".";
import { useAuthenticatedUser, useLogoutMut } from "../../auth";

export const Header = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useAuthenticatedUser();
  const { mutate: logout } = useLogoutMut();

  return (
    <Card as="header" p={4}>
      <Flex align="center" justify="space-between" wrap="wrap">
        <Heading
          as="h1"
          size="xl"
          fontFamily="logo"
          fontWeight="normal"
          letterSpacing="wider"
        >
          <Link to="/">React Skeleton</Link>
        </Heading>

        <IconButton
          display={{ base: "flex", xl: "none" }}
          aria-label={t("Toggle main menu")}
          icon={showMenu ? <FaTimes /> : <FaBars />}
          fontSize="2xl"
          colorScheme="gray"
          onClick={() => setShowMenu((show) => !show)}
        />

        <Stack
          as="nav"
          display={{ base: showMenu ? "flex" : "none", xl: "flex" }}
          direction={{ base: "column", xl: "row" }}
          w={{ base: "full", xl: "auto" }}
          align="center"
          mt={{ base: 4, xl: 0 }}
          spacing={4}
        >
          <NavButton to="/link-a" icon={FaLink}>
            {t("Link A")}
          </NavButton>
          <NavButton to="/link-b" icon={FaLink}>
            {t("Link B")}
          </NavButton>
          <NavButton to="/link-c" icon={FaLink}>
            {t("Link C")}
          </NavButton>

          {!isUserLoading && !isUserError && user ? (
            <>
              <NavButton to="/profile" icon={FaUserCircle}>
                {user.email}
              </NavButton>
              <Button
                colorScheme="gray"
                leftIcon={<FaSignOutAlt />}
                onClick={() => logout()}
              >
                {t("Log Out")}
              </Button>
            </>
          ) : (
            <NavButton to="/auth" icon={FaSignInAlt}>
              {t("Log In / Register")}
            </NavButton>
          )}

          <IconButton
            aria-label={t("Toggle dark mode")}
            icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
            fontSize="2xl"
            colorScheme="gray"
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>
    </Card>
  );
};
