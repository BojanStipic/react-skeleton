import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Heading>{t("React Skeleton")}</Heading>} />
      <Route path="*" element={<Heading>{t("Page not found")}</Heading>} />
    </Routes>
  );
};
