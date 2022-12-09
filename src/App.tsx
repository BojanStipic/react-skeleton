import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return <Heading>{t("React Skeleton")}</Heading>;
};
