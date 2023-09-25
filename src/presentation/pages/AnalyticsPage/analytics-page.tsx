import { useEffect, useState } from 'react';

import { HighChartsData } from '@/presentation/types';

import { Button, LabelWithEmoji } from '@/presentation/components/atoms';
import { Chart, AppSelect } from '@/presentation/components/molecules';

import { makeHighchartsOptions, spainProvinces } from '@/presentation/utils';
import { translate } from '@/presentation/content/helpers';

import './analytics-page.scss';

const concurrencyChartMock: HighChartsData[] = [
    {
        name: translate('app.general.offers'),
        type: 'line',
        data: [367, 262, 323, 512, 362, 423],
    },
    {
        name: translate('app.general.candidates'),
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
        name: translate('app.general.min_registered'),
    },
    {
        type: 'column',
        data: [26000],
        name: translate('app.general.overall_average'),
    },
    {
        type: 'column',
        data: [80000],
        name: translate('app.general.max_registered'),
    },
];

const sectorInitialValue = translate('app.sectors.information_technology');
const provinceInitialValue = translate('app.general.all_spain');

const AnalyticsPage: React.FC = () => {
    const [sector, setSector] = useState(sectorInitialValue);
    const [province, setProvince] = useState(provinceInitialValue);

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
        title: translate('app.concurrency_chart.title'),
        data: concurrencyChartData,
    });

    const skillsChartOptions = makeHighchartsOptions({
        title: translate('app.skills_chart.title'),
        data: skillsChartData,
    });

    const experienceChart = makeHighchartsOptions({
        title: translate('app.experience_chart.title'),
        isDoughnutChart: true,
        data: experienceChartData,
    });

    const salaryDistribuitionChart = makeHighchartsOptions({
        title: translate('app.salary_distribution_chart.title'),
        data: salaryChartData,
    });

    const handleApplyClick = () => {
        setConcurrencyChartData(concurrencyChartMock);
        setExperienceChartData(experienceChartMock);
        setSalaryChartData(salaryChartMock);
        setSkillsChartData(skillsChartMock);
    };

    const generateMostDesiredProfileLabel = (years: number) => {
        return `¡${translate(
            'app.analytics_page.most_desired_profile_has'
        )} ${years} ${translate('app.analytics_page.years_of_experience')}!`;
    };

    useEffect(() => {
        handleApplyClick();
    }, []);

    return (
        <div className="analytics-page">
            <section className="analytics-page__chart-filters">
                <header className="analytics-page__title">
                    <h2>{translate('app.general.analytics')}</h2>
                </header>

                <div className="analytics-page__actions-container">
                    <AppSelect
                        label={translate('app.placeholders.sector')}
                        value={sector}
                        onChange={setSector}
                        options={[
                            {
                                label: translate(
                                    'app.sectors.information_technology'
                                ),
                                value: 'informatica',
                            },
                        ]}
                    />

                    <AppSelect
                        label={translate('app.placeholders.in')}
                        value={province}
                        onChange={setProvince}
                        options={spainProvinces.map((province) => ({
                            label: province,
                            value: province,
                        }))}
                    />

                    <Button onClick={handleApplyClick}>
                        {translate('app.general.apply_filters')}
                    </Button>
                </div>
            </section>

            <section className="analytics-page__charts-container">
                <div className="analytics-page__chart">
                    <Chart options={concurrencyChartOptions} />
                    <LabelWithEmoji emoji="sad">
                        {translate('app.analytics_page.concurred_sector')}
                    </LabelWithEmoji>
                </div>

                <div className="analytics-page__chart">
                    <Chart options={skillsChartOptions} />
                    <LabelWithEmoji emoji="cool">
                        {translate('app.analytics_page.success_secret')}
                    </LabelWithEmoji>
                </div>

                <div className="analytics-page__chart">
                    <Chart options={experienceChart} />
                    {experienceChartData.length ? (
                        <LabelWithEmoji emoji="eyes">
                            {generateMostDesiredProfileLabel(
                                experienceChartData[0]?.data[2][1]
                            )}
                        </LabelWithEmoji>
                    ) : null}
                </div>

                <div className="analytics-page__chart">
                    <Chart options={salaryDistribuitionChart} />
                    <LabelWithEmoji emoji="moneyFace">
                        {translate('app.analytics_page.are_you_in_this_range')}
                    </LabelWithEmoji>
                </div>
            </section>
        </div>
    );
};

export default AnalyticsPage;
