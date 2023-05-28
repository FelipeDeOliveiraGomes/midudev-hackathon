import {
    AppSelect,
    Button,
    Chart,
    LabelWithEmoji,
} from '@/presentation/components';
import { useHighchartsOptions } from '@/presentation/genericHooks';
import { spainProvinces } from '@/presentation/utils/general-data-utils';

import './analytics-page.scss';

const AnalyticsPage: React.FC = () => {
    const [concurrencyChartOptions, setConcurrencyChartOptions] =
        useHighchartsOptions({
            title: 'Cantidad de ofertas de empleo x Candidatos - 3 meses',
            data: [
                { name: 'Ofertas', type: 'line', data: [11, 10, 10] },
                { name: 'candidatos', type: 'line', data: [10, 12, 11] },
            ],
        });

    const [skillsChartOptions] = useHighchartsOptions({
        title: 'Top 5 Habilidades mas demandadas',
        data: [{ type: 'pie', data: [80, 67, 53, 42, 23] }],
    });

    const [experienceChart] = useHighchartsOptions({
        title: 'Distribucion de las ofertas por nivel de experiencia',
        isDoughnutChart: true,
        data: [
            {
                type: 'pie',
                data: [
                    ['junior', 15],
                    ['mid-level', 30],
                    ['Senior', 55],
                ],
            },
        ],
    });

    const [salaryDistribuitionChart] = useHighchartsOptions({
        title: 'Sueldos minimo, medio y maximos registrados',
        data: [
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
        ],
    });

    return (
        <div className="analytics-page">
            <section className="analytics-page__chart-filters">
                <header className="analytics-page__title">
                    <h2>Analytics</h2>
                </header>

                <div className="analytics-page__actions-container">
                    <AppSelect
                        label="Quiero datos del sector..."
                        options={[
                            { label: 'informatica', value: 'informatica' },
                        ]}
                    />

                    <AppSelect
                        label="en..."
                        options={spainProvinces.map((province) => ({
                            label: province,
                            value: province,
                        }))}
                    />

                    <Button>Aplicar filtros</Button>
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
                    <LabelWithEmoji emoji="eyes">
                        !El perfil mas buscado tiene $x años o mas de
                        experiencia!
                    </LabelWithEmoji>
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
