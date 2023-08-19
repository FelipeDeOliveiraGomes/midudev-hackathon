import React from 'react';

const pages = {
    HomePage: React.lazy(() => import('./HomePage/home-page')),
    AnalyticsPage: React.lazy(() => import('./AnalyticsPage/analytics-page')),
    SalaryComparissonPage: React.lazy(
        () => import('./SalaryComparissonPage/salary-comparisson-page')
    ),
    JobAssistantPage: React.lazy(
        () => import('./JobAssistantPage/job-assistant-page')
    ),
    CurriculumAnalyzerPage: React.lazy(
        () => import('./CurriculumAnaliserPage/curriculum-analiser')
    ),
    AboutPage: React.lazy(() => import('./About/about-page')),
};

export default pages;
