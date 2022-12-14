import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Container my={24}>
      <VStack spacing={4}>
        <Heading>{t("Page not found")}</Heading>
        <Text>
          {t("Sorry")}{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          {t("we couldn’t find what you were looking for.")}
        </Text>
        <Link as={RouterLink} to="/">
          {t("Go home")}
        </Link>
      </VStack>
    </Container>
  );
};
