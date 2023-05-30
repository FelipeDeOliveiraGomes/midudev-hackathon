import { useState } from 'react';

import {
    AnimatedSlide,
    AppSelect,
    Chart,
    LabelWithEmoji,
} from '@/presentation/components';

import './salary-comparisson.scss';
import { makeHighchartsOptions } from '@/presentation/utils';

const SalaryComparissonPage: React.FC = () => {
    const [userSalaryInput, setUserSalaryInput] = useState('30000');

    const averageSalary = 28000;

    const options = makeHighchartsOptions({
        data: [
            {
                type: 'column',
                data: [averageSalary],
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

    const usersSalaryNumber = Number(userSalaryInput);
    const userSalaryIsGreaterThanAverage = usersSalaryNumber > averageSalary;

    const handleChange = (newValue: string) => {
        const notNumberRegExp = /[^0-9]/;
        if (notNumberRegExp.test(newValue)) return;

        setUserSalaryInput(newValue);
    };

    const defineMessage = () => {
        const difference = usersSalaryNumber - averageSalary;
        const percentage = (difference / averageSalary) * 100;

        if (difference > 0) {
            return `¡Felicidades! Tu sueldo está un ${percentage.toFixed(
                2
            )}% por encima de la media del mercado`;
        } else {
            return `¡Pidete un aumento!, estás un ${(percentage * -1).toFixed(
                2
            )}% defasado de la media del mercado`;
        }
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
                            options={[
                                { label: 'Informatica', value: 'informatica' },
                            ]}
                            label="Comparar con sueldos del sector..."
                            value="Informatica"
                        />

                        <div className="salary-comparisson-page__chart-container">
                            <Chart options={options} />
                        </div>

                        <LabelWithEmoji
                            emoji={
                                userSalaryIsGreaterThanAverage
                                    ? 'moneyFace'
                                    : 'sad'
                            }
                        >
                            {defineMessage()}
                        </LabelWithEmoji>
                    </div>
                </AnimatedSlide>
            </div>
        </section>
    );
};

export default SalaryComparissonPage;
