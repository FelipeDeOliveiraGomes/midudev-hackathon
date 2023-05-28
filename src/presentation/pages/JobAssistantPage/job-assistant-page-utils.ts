import {
    FieldToRenderType,
    JobAssistantFormFields,
    JobAssistantFormInitialValue,
} from './job-assistant-page-types';

export const initialValues: JobAssistantFormInitialValue = {
    name: '',
    email: '',
    offerTitle: '',
    province: '',
};

export const validationRules = {
    email: (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    },
} as Record<JobAssistantFormFields, (value: string) => boolean>;

export const fieldsToRender: FieldToRenderType[] = [
    {
        label: 'Nombre',
        type: 'text',
        name: 'name',
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
    },
    {
        label: 'Busco ofertas de...',
        type: 'text',
        name: 'offerTitle',
    },
];
