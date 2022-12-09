import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { GlobalLayout, UnderConstruction } from "./components";

export const App = () => {
  const { t } = useTranslation();

  return (
    <GlobalLayout>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="*" element={<Heading>{t("Page not found")}</Heading>} />
      </Routes>
    </GlobalLayout>
  );
};
