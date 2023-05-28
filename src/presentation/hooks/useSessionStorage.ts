import { useState, useEffect } from 'react';
import { SetStateType } from '../types';

type UseSessionStorageParams<U> = {
    key: string;
    initialValue: U;
};

const useSessionStorage = <T>({
    key,
    initialValue,
}: UseSessionStorageParams<T>): [T, SetStateType<T>] => {
    const [value, setValue] = useState<T>(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useSessionStorage;
