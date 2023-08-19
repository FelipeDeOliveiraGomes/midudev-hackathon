import { useEffect } from 'react';

import { RouteObject, useLocation, useRoutes } from 'react-router-dom';

import pages from '../pages';
import { routesRecord } from './routes-record';

type AppRoutes = RouteObject & {
    title?: string;
};

const {
    ANALYTICS,
    SALARY_COMPARISSON,
    JOB_ASSISTANT,
    CURRICULUM_ANALISER,
    ABOUT,
} = routesRecord;

const {
    AboutPage,
    AnalyticsPage,
    CurriculumAnalyzerPage,
    HomePage,
    JobAssistantPage,
    SalaryComparissonPage,
} = pages;

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
        {
            path: CURRICULUM_ANALISER,
            element: <CurriculumAnalyzerPage />,
            title: 'Curriculum Analiser',
        },
        {
            path: ABOUT,
            element: <AboutPage />,
            title: 'Curriculum Analiser',
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
