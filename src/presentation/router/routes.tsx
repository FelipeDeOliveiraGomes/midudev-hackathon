import { useRoutes } from 'react-router-dom';

import { AnalyticsPage, HomePage, SalaryComparissonPage } from '../pages';
import { routesRecord } from './routes-record';

const { ANALYTICS, SALARY_COMPARISSON } = routesRecord;

const Routes: React.FC = () =>
    useRoutes([
        { path: '/', element: <HomePage /> },
        { path: ANALYTICS, element: <AnalyticsPage /> },
        { path: SALARY_COMPARISSON, element: <SalaryComparissonPage /> },
        { path: '*', element: <>Not found</> },
    ]);

export default Routes;
