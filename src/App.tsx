import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { UnderConstruction } from "./components";

export const App = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<UnderConstruction height="100vh" />} />
      <Route path="*" element={<Heading>{t("Page not found")}</Heading>} />
    </Routes>
  );
};
