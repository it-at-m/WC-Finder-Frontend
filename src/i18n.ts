import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/EN/en.json"
import translationFR from "./locales/DE/de.json"

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'de',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;