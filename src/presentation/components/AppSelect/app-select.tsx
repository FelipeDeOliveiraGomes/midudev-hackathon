import { useRef, useState } from 'react';
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

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filterOptions = (options: AppSelectOptionsType[]) => {
        const filterRegExp = new RegExp(searchExp, 'gi');
        return options.filter(({ label }) => filterRegExp.test(label));
    };

    const openDropDown = () => {
        if (!dropdownRef.current || !inputRef.current) return;

        dropdownRef.current!.style.visibility = 'visible';
        inputRef.current.focus();
    };

    const closeDropDown = () => {
        if (!dropdownRef.current) return;
        dropdownRef.current!.style.visibility = 'hidden';
    };

    const optionsFiltered = filterOptions(options);

    return (
        <div className="app-select">
            <span className="app-select__label">{label}</span>

            <div className="app-select__selected-item-display-container">
                <input
                    type="text"
                    className="app-select__selected-item-display"
                    value={value}
                    onClick={openDropDown}
                />
            </div>

            <div ref={dropdownRef} className="app-select__dropdown">
                <input
                    ref={inputRef}
                    onBlur={() =>
                        setTimeout(() => {
                            closeDropDown();
                        }, 100)
                    }
                    className="app-select__searchbox"
                    value={searchExp}
                    onChange={({ target }) => setSearchExp(target.value)}
                    type="text"
                />

                <ul className="app-select__options-list">
                    {optionsFiltered.length ? (
                        optionsFiltered.map((options) => (
                            <li
                                className={`app-select__li ${
                                    options.value === value
                                        ? 'app-select__li--selected'
                                        : ''
                                }`}
                                onClick={() => {
                                    onChange(options.value);
                                }}
                                key={options.value}
                            >
                                {options.label}
                            </li>
                        ))
                    ) : (
                        <li className="app-select__li">
                            <span>
                                No encontrado:
                                <span className="app-select__highlight">
                                    "{searchExp}"
                                </span>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AppSelect;
