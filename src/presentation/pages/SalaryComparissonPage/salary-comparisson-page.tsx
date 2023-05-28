import { useState } from 'react';

import {
    AnimatedSlide,
    AppSelect,
    Button,
    Chart,
} from '@/presentation/components';

import './salary-comparisson.scss';
import { makeHighchartsOptions } from '@/presentation/utils';

const SalaryComparissonPage: React.FC = () => {
    const [userSalaryInput, setUserSalaryInput] = useState('30000');

    const options = makeHighchartsOptions({
        data: [
            {
                type: 'column',
                data: [28000],
                name: 'Media Infojobs del sector',
            },
            {
                type: 'column',
                data: [Number(userSalaryInput)],
                name: 'Tu sueldo',
            },
        ],
        title: 'Comparacion de Sueldo',
    });

    options.chart!.backgroundColor = 'transparent';

    const handleChange = (newValue: string) => {
        const notNumberRegExp = /[^0-9]/;
        if (notNumberRegExp.test(newValue)) return;

        setUserSalaryInput(newValue);
    };

    return (
        <section className="salary-comparisson-page">
            <div className="salary-comparisson-page__slider-container">
                <AnimatedSlide delay={100}>
                    <div className="salary-comparisson-page__inner-container">
                        <header className="salary-comparisson-page__header">
                            <h2>Comparador de Sueldos</h2>
                        </header>

                        <label className={`salary-comparisson-page__label`}>
                            Tu sueldo
                            <input
                                value={userSalaryInput}
                                type={'text'}
                                className="salary-comparisson-page__input"
                                onChange={({ target }) =>
                                    handleChange(target.value)
                                }
                                placeholder="30000"
                            />
                        </label>

                        <AppSelect
                            options={[]}
                            label="Comparar con sueldos del sector..."
                        />

                        <div className="salary-comparisson-page__chart-container">
                            <Chart options={options} />
                        </div>
                    </div>
                </AnimatedSlide>
            </div>
        </section>
    );
};

export default SalaryComparissonPage;
