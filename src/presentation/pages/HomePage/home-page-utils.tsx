import { CardWithIllustrationParams } from '@/presentation/components/molecules/CardWithIllustration/card-with-illustration-types';

import DoubtsIllustration from '@/presentation/assets/illustrations/Night.svg';
import RobotIllustration from '@/presentation/assets/illustrations/robot-finding-data.svg';
import CvAnalisisIllustration from '@/presentation/assets/illustrations/Empty Not found CV.svg';
import SalaryComparisson from '@/presentation/assets/illustrations/Empty Salary.svg';

import { routesRecord } from '@/presentation/router';

type HomePageCardsDataType = {
    path: string;
    delay: number;
} & CardWithIllustrationParams;

export const homePageCardsData: HomePageCardsDataType[] = [
    {
        backgroundColor: 'soft-blue',
        illustration: <DoubtsIllustration />,
        title: 'app.home_page.analytics_card_title',
        delay: 100,
        callToAction: 'app.home_page.analytics_card_cta',
        path: routesRecord.ANALYTICS,
        children: 'app.home_page.analytics_card_description',
    },
    {
        backgroundColor: 'soft-yellow',
        illustration: <RobotIllustration />,
        title: 'app.home_page.job_assistant_card_title',
        delay: 400,
        direction: 'to-left',
        callToAction: 'app.home_page.job_assistant_card_cta',
        path: routesRecord.JOB_ASSISTANT,
        children: 'app.home_page.job_assistant_card_description',
    },
    {
        backgroundColor: 'soft-green',
        illustration: <CvAnalisisIllustration />,
        title: 'app.home_page.curriculum_analiser_card_title',
        delay: 700,
        callToAction: 'app.home_page.curriculum_analiser_card_cta',
        path: routesRecord.CURRICULUM_ANALISER,
        children: 'app.home_page.curriculum_analiser_card_description',
    },
    {
        backgroundColor: 'soft-red',
        illustration: <SalaryComparisson />,
        title: 'app.home_page.salary_comparisson_card_title',
        delay: 900,
        direction: 'to-left',
        callToAction: 'app.home_page.salary_comparisson_card_cta',
        path: routesRecord.SALARY_COMPARISSON,
        children: 'app.home_page.salary_comparisson_card_description',
    },
];
