import { useState } from 'react';

import {
    AppSelect,
    Button,
    Chart,
    LabelWithEmoji,
} from '@/presentation/components';
import { makeHighchartsOptions, spainProvinces } from '@/presentation/utils';
import { HighChartsData } from '@/presentation/types';

import './analytics-page.scss';

const concurrencyChartMock: HighChartsData[] = [
    { name: 'Ofertas', type: 'line', data: [11, 10, 10] },
    { name: 'candidatos', type: 'line', data: [10, 12, 11] },
];

const skillsChartMock: HighChartsData[] = [
    { type: 'pie', data: [80, 67, 53, 42, 23] },
];

const experienceChartMock: HighChartsData[] = [
    {
        type: 'pie',
        data: [
            ['junior', 15],
            ['mid-level', 30],
            ['Senior', 55],
        ],
    },
];

const salaryChartMock: HighChartsData[] = [
    {
        type: 'column',
        data: [18000],
        name: 'Mínimo registrado',
    },
    {
        type: 'column',
        data: [26000],
        name: 'Média general',
    },
    {
        type: 'column',
        data: [80000],
        name: 'Maximo registrado',
    },
];

const AnalyticsPage: React.FC = () => {
    const [sector, setSector] = useState('');
    const [province, setProvince] = useState('');

    const [concurrencyChartData, setConcurrencyChartData] = useState<
        HighChartsData[]
    >([]);

    const [skillsChartData, setSkillsChartData] = useState<HighChartsData[]>(
        []
    );

    const [experienceChartData, setExperienceChartData] = useState<
        HighChartsData[]
    >([]);

    const [salaryChartData, setSalaryChartData] = useState<HighChartsData[]>(
        []
    );

    const concurrencyChartOptions = makeHighchartsOptions({
        title: 'Cantidad de ofertas de empleo x Candidatos - 3 meses',
        data: concurrencyChartData,
    });

    const skillsChartOptions = makeHighchartsOptions({
        title: 'Top 5 Habilidades mas demandadas',
        data: skillsChartData,
    });

    const experienceChart = makeHighchartsOptions({
        title: 'Distribucion de las ofertas por nivel de experiencia',
        isDoughnutChart: true,
        data: experienceChartData,
    });

    const salaryDistribuitionChart = makeHighchartsOptions({
        title: 'Sueldos minimo, medio y maximos registrados',
        data: salaryChartData,
    });

    const handleApplyClick = () => {
        setConcurrencyChartData(concurrencyChartMock);
        setExperienceChartData(experienceChartMock);
        setSalaryChartData(salaryChartMock);
        setSkillsChartData(skillsChartMock);
    };

    return (
        <div className="analytics-page">
            <section className="analytics-page__chart-filters">
                <header className="analytics-page__title">
                    <h2>Analytics</h2>
                </header>

                <div className="analytics-page__actions-container">
                    <AppSelect
                        label="Quiero datos del sector..."
                        value={sector}
                        onChange={(newValue) => {
                            console.log(newValue);
                            setSector(newValue);
                        }}
                        options={[
                            { label: 'informatica', value: 'informatica' },
                        ]}
                    />

                    <AppSelect
                        label="en..."
                        value={province}
                        onChange={(newValue) => setProvince(newValue)}
                        options={spainProvinces.map((province) => ({
                            label: province,
                            value: province,
                        }))}
                    />

                    <Button onClick={handleApplyClick}>Aplicar filtros</Button>
                </div>
            </section>

            <section className="analytics-page__charts-container">
                <div className="analytics-page__chart">
                    <Chart options={concurrencyChartOptions} />
                    <LabelWithEmoji emoji="sad">
                        ¡Este sector actualmente esta muy concurrido!
                    </LabelWithEmoji>
                </div>

                <div className="analytics-page__chart">
                    <Chart options={skillsChartOptions} />
                    <LabelWithEmoji emoji="cool">
                        ¿Quieres destacar en el mercado? Aqui esta el secreto.
                    </LabelWithEmoji>
                </div>

                <div className="analytics-page__chart">
                    <Chart options={experienceChart} />
                    {experienceChartData.length ? (
                        <LabelWithEmoji emoji="eyes">
                            !El perfil mas buscado tiene{' '}
                            {experienceChartData[0]?.data[2][1]} años o mas de
                            experiencia!
                        </LabelWithEmoji>
                    ) : null}
                </div>

                <div className="analytics-page__chart">
                    <Chart options={salaryDistribuitionChart} />
                    <LabelWithEmoji emoji="moneyFace">
                        ¿Estas dentro de este rango?
                    </LabelWithEmoji>
                </div>
            </section>
        </div>
    );
};

export default AnalyticsPage;
