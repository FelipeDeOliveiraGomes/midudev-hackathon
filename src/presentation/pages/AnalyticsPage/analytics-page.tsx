import { useEffect, useState } from 'react';

import { HighChartsData } from '@/presentation/types';

import { Button, LabelWithEmoji } from '@/presentation/components/atoms';
import { Chart, AppSelect } from '@/presentation/components/molecules';

import { makeHighchartsOptions, spainProvinces } from '@/presentation/utils';

import './analytics-page.scss';

const concurrencyChartMock: HighChartsData[] = [
    { name: 'Ofertas', type: 'line', data: [367, 262, 323, 512, 362, 423] },
    {
        name: 'candidatos',
        type: 'line',
        data: [1420, 1519, 1323, 1420, 1319, 1323],
    },
];

const skillsChartMock: HighChartsData[] = [
    {
        type: 'pie',
        data: [
            ['javascript', 88],
            ['React', 77],
            ['Git', 63],
            ['Sass', 51],
            ['Typescript', 48],
        ],
    },
];

const experienceChartMock: HighChartsData[] = [
    {
        type: 'pie',
        data: [
            ['junior', 1],
            ['mid-level', 3],
            ['Senior', 5],
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
    const [sector, setSector] = useState('Informatica');
    const [province, setProvince] = useState('Toda España');

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
        title: 'Cantidad de ofertas de empleo x Candidatos - 6 meses',
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

    useEffect(() => {
        handleApplyClick();
    }, []);

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
