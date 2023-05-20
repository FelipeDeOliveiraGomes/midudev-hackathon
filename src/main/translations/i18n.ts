import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homePageEN from './en/homePageEN.json';
import homePageES from './es/homePageES.json';

i18n.use(initReactI18next).init({
  resources: {
    en: homePageEN,
    es: homePageES,
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
