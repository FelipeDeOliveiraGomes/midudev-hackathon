import { createContext, useState } from 'react';

import {
    ContextValueType,
    LocaleContextProps,
    Locales,
} from './locale-context-types';

const contextInitialValue: ContextValueType = {
    locale: 'es',
    setLocale: () => {},
};

export const localeContext = createContext(contextInitialValue);

const LocaleContextProvider: React.FC<LocaleContextProps> = ({ children }) => {
    const [locale, setLocale] = useState<Locales>('es');

    return (
        <localeContext.Provider value={{ locale, setLocale }}>
            {children}
        </localeContext.Provider>
    );
};

export default LocaleContextProvider;
