import { HTMLInputTypeAttribute } from 'react';

export type JobAssistantFormFields =
    | 'email'
    | 'name'
    | 'offerTitle'
    | 'province';

export type JobAssistantFormInitialValue = Record<
    JobAssistantFormFields,
    string
>;

export type FieldToRenderType = {
    label: string;
    name: JobAssistantFormFields;
    type: HTMLInputTypeAttribute;
};
