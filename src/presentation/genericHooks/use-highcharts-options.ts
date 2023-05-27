import { Options } from 'highcharts';
import { ChartTypes, HighChartsData } from '../types';

type useHighChartsOptionsParams = {
    title: string;
    isDoughnutChart?: boolean;
    data: HighChartsData[];
};

export const useHighchartsOptions = ({
    data,
    title,
    isDoughnutChart,
}: useHighChartsOptionsParams): Options => {
    return {
        title: {
            text: title,
        },
        plotOptions: {
            pie: {
                innerSize: isDoughnutChart ? '50%' : '',
                depth: 45,
                dataLabels: {
                    enabled: true,
                },
            },
            line: {
                lineWidth: 5,
            },
        },
        series: data,
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
            height: '52%',
        },
    };
};
