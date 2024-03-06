// i18nConfig.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en/translation.json";
import translationFR from "../public/locales/fr/translation.json";
import translationAR from "../public/locales/ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
    ar: {
      translation: translationAR,
    },
  },

  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
