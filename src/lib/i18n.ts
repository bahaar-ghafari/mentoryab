import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../locales/en/translation.json';
import translationFA from '../locales/fa/translation.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fa: { translation: translationFA },
    },
    fallbackLng: 'en',

    lng: undefined,
    supportedLngs: ['fa', 'en'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
