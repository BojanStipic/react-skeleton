import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enUs from "./locales/en-US.translation.json";

export const resources = {
  "en-US": {
    translation: enUs,
  },
} as const;

void i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "en-US",
  resources,
});
