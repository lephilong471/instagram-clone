import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from './translations/en';
import viJSON from './translations/vi';
const availableLanguages = ['en', 'vi'];

const resources = {
  en: { translation: enJSON },
  vi: { translation: viJSON }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    lng: 'vi',
    fallbackLng: 'vi',
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    },
    supportedLngs: availableLanguages
  });

export default i18n;
