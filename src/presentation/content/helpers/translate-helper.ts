import es_translations from '../translations/es.json';

export type TranslationsKeys = keyof typeof es_translations;

export const translate = (
    id: TranslationsKeys,
    ...vars: Array<string | number>
) => {
    let translation = es_translations[id];

    if (vars.length) {
        vars.forEach((el, index) => {
            translation = translation.replace(`{${index}}`, String(el));
        });
    }

    return translation ?? id;
};
