import { Chart } from "@/presentation/components";
import { useHighchartsOptions } from "@/presentation/genericHooks";

import "./analytics-page.scss";
import {
    spainProvinces,
    spainRegions,
} from "@/presentation/utils/general-data-utils";

const AnalyticsPage: React.FC = () => {
    const concurrencyChartOptions = useHighchartsOptions({
        title: "Cantidad de ofertas de empleo x Candidatos - 3 meses",
        data: [
            { type: "line", data: [11, 10, 10] },
            { type: "line", data: [10, 12, 11] },
        ],
    });

    const skillsChartOptions = useHighchartsOptions({
        title: "Top 5 Habilidades mas demandadas",
        data: [{ type: "pie", data: [80, 67, 53, 42, 23] }],
    });

    const experienceChart = useHighchartsOptions({
        title: "Distribucion de las ofertas por nivel de experiencia",
        isDoughnutChart: true,
        data: [{ type: "pie", data: [15, 30, 55] }],
    });

    const salaryDistribuitionChart = useHighchartsOptions({
        title: "Sueldos minimo, medio y maximos registrados",
        data: [
            {
                type: "column",
                data: [18000],
            },
            {
                type: "column",
                data: [26000],
            },
            {
                type: "column",
                data: [80000],
            },
        ],
    });

    return (
        <div className="analytics-page">
            <section className="analytics-page__concurrency-chart-filters">
                <header className="analytics-page__title">
                    <h2>Analytics</h2>
                </header>

                <div className="analytics-page__selects-container">
                    <select className="analytics-page__select">
                        {spainRegions.map((region) => (
                            <option key={region}>{region}</option>
                        ))}
                    </select>

                    <select className="analytics-page__select">
                        {spainProvinces[spainRegions[0]].map((province) => (
                            <option key={province}>{province}</option>
                        ))}
                    </select>

                    <select className="analytics-page__select">
                        <option>informatica</option>
                    </select>
                </div>
            </section>

            <Chart options={concurrencyChartOptions} />
            <Chart options={skillsChartOptions} />
            <Chart options={experienceChart} />
            <Chart options={salaryDistribuitionChart} />
        </div>
    );
};
export default AnalyticsPage;