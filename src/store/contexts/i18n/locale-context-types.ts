import { SetStateType } from '@/presentation/types';

export type LocaleContextProps = {
    children: React.ReactNode;
};

export type Locales = 'en' | 'es' | 'it' | 'pt';

export type ContextValueType = {
    locale: Locales;
    setLocale: SetStateType<Locales>;
};
