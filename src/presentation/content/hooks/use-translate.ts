import es_translations from '../translations/es.json';
import pt_translations from '../translations/pt.json';
import it_translations from '../translations/it.json';
import en_translations from '../translations/en.json';

import { useLocale } from '@/store/contexts/i18n/locale-context-hooks';
import { Locales } from '@/store/contexts/i18n/locale-context-types';

type Translationstype = typeof es_translations;
export type TranslationsKeys = keyof Translationstype;

const translationsLookup: Record<Locales, Translationstype> = {
    en: en_translations,
    es: es_translations,
    it: it_translations,
    pt: pt_translations,
};

export const useTranslate = () => {
    const { locale } = useLocale();

    const translations = translationsLookup[locale];

    const translate = (
        id: TranslationsKeys,
        ...vars: Array<string | number>
    ) => {
        let translation = translations[id];

        if (vars.length) {
            vars.forEach((el, index) => {
                translation = translation.replace(`{${index}}`, String(el));
            });
        }

        return translation ?? id;
    };

    return translate;
};
