import { Card, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue("brand.500", "brand.300");

  return (
    <Card as="footer" p={4}>
      <Text fontSize="sm" fontWeight="light" textAlign="center">
        {t("Copyright © 2022 Bojan Stipic")} |{" "}
        {t("Website source code is available on")}{" "}
        <Link
          href="https://github.com/BojanStipic/website"
          isExternal={true}
          color={linkColor}
        >
          GitHub
        </Link>
        , {t("licensed under")}{" "}
        <Link
          href="https://github.com/BojanStipic/website/blob/master/LICENSE"
          isExternal={true}
          color={linkColor}
        >
          AGPL-3.0-or-later
        </Link>
        .
      </Text>
    </Card>
  );
};
