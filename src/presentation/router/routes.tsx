import { RouteObject, useLocation, useRoutes } from 'react-router-dom';

import {
    AnalyticsPage,
    HomePage,
    JobAssistantPage,
    SalaryComparissonPage,
} from '../pages';
import { routesRecord } from './routes-record';
import { useEffect } from 'react';

const { ANALYTICS, SALARY_COMPARISSON, JOB_ASSISTANT } = routesRecord;

type AppRoutes = RouteObject & {
    title?: string;
};

const Routes: React.FC = () => {
    const location = useLocation();

    const routes: AppRoutes[] = [
        { path: '/', element: <HomePage />, title: 'InfoJobs Tools' },
        {
            path: ANALYTICS,
            element: <AnalyticsPage />,
            title: 'Analytics',
        },
        {
            path: SALARY_COMPARISSON,
            element: <SalaryComparissonPage />,
            title: 'Salary Comparisson',
        },
        {
            path: JOB_ASSISTANT,
            element: <JobAssistantPage />,
            title: 'Job Assistant',
        },
        { path: '*', element: <>Not found</> },
    ];

    useEffect(() => {
        const title = routes.find((route) => route.path === location.pathname);
        document.title = title?.title ? title.title : 'InfoJobs Tools';
    }, [location, routes]);

    return useRoutes(routes);
};

export default Routes;
