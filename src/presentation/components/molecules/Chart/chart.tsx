import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

import './chart.scss';

type ChartParams = {
    options: Highcharts.Options;
};

const Chart: React.FC<ChartParams> = ({ options }) => {
    return (
        <section className="chart">
            <div className="chart-inner-container">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </section>
    );
};

export default Chart;
