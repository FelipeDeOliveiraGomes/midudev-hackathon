import { useContext } from 'react';

import { localeContext } from './locale-context';

export const useLocale = () => useContext(localeContext);
