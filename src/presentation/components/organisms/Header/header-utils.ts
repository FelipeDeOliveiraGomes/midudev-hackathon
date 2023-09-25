import { translate } from '@/presentation/content/helpers';
import { routesRecord } from '@/presentation/router/routes-record';

export const linksToRender = [
    {
        path: routesRecord.ANALYTICS,
        label: translate('app.general.analytics'),
    },
    {
        path: routesRecord.JOB_ASSISTANT,
        label: translate('app.general.job_assistant'),
    },
    {
        path: routesRecord.CURRICULUM_ANALISER,
        label: translate('app.general.curriculum_analisis'),
    },
    {
        path: routesRecord.SALARY_COMPARISSON,
        label: translate('app.general.salary_comparisson'),
    },
];
