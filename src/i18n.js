import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./Locales/en.json";
import zh from "./Locales/zh.json";
import hi from "./Locales/hi.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      hi: { translation: hi },
    },
    fallbackLng: "en",
    preload: ["en", "zh", "hi"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
