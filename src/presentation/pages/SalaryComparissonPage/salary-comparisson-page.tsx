import { useState } from 'react';

import { LabelWithEmoji } from '@/presentation/components/atoms';
import { AppSelect, Chart } from '@/presentation/components/molecules';
import { AnimatedSlide } from '@/presentation/components/helpers';

import { makeHighchartsOptions } from '@/presentation/utils';

import './salary-comparisson.scss';
import { translate } from '@/presentation/content/helpers';

const SalaryComparissonPage: React.FC = () => {
    const [userSalaryInput, setUserSalaryInput] = useState('30000');

    const averageSalary = 28000;

    const options = makeHighchartsOptions({
        data: [
            {
                type: 'column',
                data: [averageSalary],
                name: translate('app.salary_comparisson_page.average_salary'),
            },
            {
                type: 'column',
                data: [Number(userSalaryInput)],
                name: translate('app.salary_comparisson_page.your_salary'),
            },
        ],
        title: translate('app.salary_comparisson_page.chart_title'),
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
        const percentage = ((difference / averageSalary) * 100).toFixed(2);

        return difference > 0
            ? translate(
                  'app.salary_comparisson_page.salary_higher_than_average',
                  percentage
              )
            : translate(
                  'app.salary_comparisson_page.salary_lower_than_average',
                  percentage
              );
    };

    return (
        <section className="salary-comparisson-page">
            <div className="salary-comparisson-page__slider-container">
                <AnimatedSlide delay={100}>
                    <div className="salary-comparisson-page__inner-container">
                        <header className="salary-comparisson-page__header">
                            <h2>
                                {translate('app.salary_comparisson_page.title')}
                            </h2>
                        </header>

                        <label className={`salary-comparisson-page__label`}>
                            {translate(
                                'app.salary_comparisson_page.your_salary'
                            )}
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
                                {
                                    label: translate(
                                        'app.sectors.information_technology'
                                    ),
                                    value: 'informatica',
                                },
                            ]}
                            label={translate(
                                'app.salary_comparisson_page.sector'
                            )}
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
