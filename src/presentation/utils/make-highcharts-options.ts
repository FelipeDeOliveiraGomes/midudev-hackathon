import { Options } from 'highcharts';
import { HighChartsData } from '../types';

type MakeHighChartsOptionsParams = {
    title: string;
    isDoughnutChart?: boolean;
    data: HighChartsData[];
    intervalLabels?: {
        xAxis?: string[];
        YAxis?: string[];
    };
};

export const makeHighchartsOptions = ({
    data,
    title,
    isDoughnutChart,
    intervalLabels,
}: MakeHighChartsOptionsParams): Options => {
    return {
        title: {
            text: title,
        },
        xAxis: {
            categories: intervalLabels?.xAxis,
        },
        yAxis: {
            categories: intervalLabels?.YAxis,
        },
        plotOptions: {
            pie: {
                innerSize: isDoughnutChart ? '50%' : '',
                depth: 45,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: 'var(--font-size-xs)',
                    },
                },
            },
            line: {
                lineWidth: 5,
            },
        },
        series: data.map(({ data, type, name }) => ({
            name,
            type,
            data,
        })),
        legend: {
            itemStyle: {
                fontSize: 'var(--font-size-s)',
            },
        },
        credits: {
            enabled: false,
        },
        colors: [
            'var(--primary)',
            'var(--accent)',
            'var(--yellow)',
            'var(--green)',
            'var(--red)',
        ],
        chart: {
            height: '50%',
        },
    };
};
