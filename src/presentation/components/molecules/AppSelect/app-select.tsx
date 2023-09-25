import React, { useEffect, useRef, useState } from 'react';

import { translate } from '@/presentation/content/helpers/translate-helper';

import './app-select.scss';
type AppSelectOptionsType = {
    label: string;
    value: string;
};

type AppSelectParams = {
    options: AppSelectOptionsType[];
    label?: string;
    value?: string;
    onChange?: (newValue: string) => void;
};

const AppSelect: React.FC<AppSelectParams> = ({
    options,
    label,
    value,
    onChange = () => {},
}) => {
    const [searchExp, setSearchExp] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const appSelectRef = useRef<HTMLDivElement>(null);

    const filterOptions = (options: AppSelectOptionsType[]) => {
        const filterRegExp = new RegExp(searchExp, 'gi');
        return options.filter(({ label }) => filterRegExp.test(label));
    };

    const closeDropDown = () => {
        setIsDropdownVisible(false);
    };

    const toggleDropdownVisibility = () => {
        setIsDropdownVisible((prevState) => !prevState);
    };

    const optionsFiltered = filterOptions(options);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                appSelectRef.current &&
                !appSelectRef.current.contains(event.target as Node)
            ) {
                closeDropDown();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div ref={appSelectRef} className="app-select">
            <span className="app-select__label">{label}</span>

            <div
                onClick={toggleDropdownVisibility}
                className="app-select__selected-item-display-container"
            >
                <span className="app-select__selected-item-display">
                    {value}
                </span>
            </div>

            {isDropdownVisible && (
                <div className="app-select__dropdown">
                    <input
                        className="app-select__searchbox"
                        value={searchExp}
                        onChange={({ target }) => setSearchExp(target.value)}
                        type="text"
                    />

                    <ul className="app-select__options-list">
                        {optionsFiltered.length ? (
                            optionsFiltered.map((option) => (
                                <li
                                    className={`app-select__li ${
                                        option.value === value
                                            ? 'app-select__li--selected'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        onChange(option.value);
                                        closeDropDown();
                                    }}
                                    key={option.value}
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="app-select__li">
                                <span>
                                    {translate('app.general.not_found')}
                                    {': '}
                                    <span className="app-select__highlight">
                                        "{searchExp}"
                                    </span>
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AppSelect;
