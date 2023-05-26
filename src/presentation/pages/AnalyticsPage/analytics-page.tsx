import { Chart } from "@/presentation/components";
import { useHighchartsOptions } from "@/presentation/genericHooks";

import "./analytics-page.scss";

const AnalyticsPage: React.FC = () => {
    const chartOptions = useHighchartsOptions({
        title: "test-chart",
        data: [
            { type: "column", data: [10, 12, 13] },
            { type: "column", data: [3, 4, 6] },
        ],
    });

    return (
        <div className="analytics-page">
            <Chart options={chartOptions} />
        </div>
    );
};
export default AnalyticsPage;
