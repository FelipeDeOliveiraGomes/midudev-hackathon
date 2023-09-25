import { useEffect, useState } from 'react';

import { JobAssistantFormFields } from './job-assistant-page-types';

import {
    AnimatedCheck,
    Button,
    TypingAnimatedText,
} from '@/presentation/components/atoms';
import { AppSelect } from '@/presentation/components/molecules';
import { AnimatedSlide } from '@/presentation/components/helpers';

import useSessionStorage from '@/store/hooks/useSessionStorage';

import {
    initialValues,
    validationRules,
    fieldsToRender,
} from './job-assistant-page-utils';
import useFormValidation from '@/presentation/hooks/useFormValidation';
import { spainProvinces } from '@/presentation/utils';
import { TranslationsKeys, useTranslate } from '@/presentation/content/hooks';

import './job-assistant-page.scss';

const JobAssistantPage: React.FC = () => {
    const [formIsVisible, setFormIsVisible] = useState(true);
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(true);

    const [isFirstUserLoading, setFirstUserLoading] = useSessionStorage({
        key: 'job-assistant-page-visited',
        initialValue: true,
    });

    const { errors, formValues, handleChange } = useFormValidation({
        initialValues,
        setSubmitButtonState: setSubmitButtonIsDisabled,
        validationRules,
    });

    const translate = useTranslate();

    const handleSubmit = () => {
        setFormIsVisible(false);
    };

    const defineFieldStatus = (fieldName: JobAssistantFormFields) => {
        if (!formValues[fieldName].length) return '';
        if (errors[fieldName]) return 'with-error';

        return 'valid';
    };

    useEffect(() => {
        if (isFirstUserLoading) {
            setTimeout(() => {
                setFirstUserLoading(false);
            }, 4200);
        }
    }, []);

    return (
        <section className="job-assistant-page">
            <div className="job-assistant-page__inner-container">
                <header className="job-assistant-page__header">
                    <TypingAnimatedText
                        text={translate(
                            'app.job_assistant_page.welcome_message'
                        )}
                        typingSpeed={isFirstUserLoading ? 80 : 0}
                    />
                </header>

                {formIsVisible ? (
                    <AnimatedSlide delay={isFirstUserLoading ? 4140 : 0}>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="job-assistant-page__form"
                        >
                            <header className="job-assistant-page__form-header">
                                <h3 className="job-assistant-page__title">
                                    {translate('app.job_assistant_page.title')}
                                </h3>
                            </header>

                            {fieldsToRender.map(({ label, name, type }) => (
                                <label
                                    className={`job-assistant-page__label ${defineFieldStatus(
                                        name
                                    )}`}
                                    key={name}
                                >
                                    {translate(label as TranslationsKeys)}
                                    <input
                                        name={name}
                                        value={formValues[name]}
                                        type={type}
                                        className="job-assistant-page__input"
                                        onChange={handleChange}
                                    />
                                </label>
                            ))}

                            <AppSelect
                                label={translate('app.placeholders.in')}
                                options={spainProvinces.map((province) => ({
                                    label: province,
                                    value: province,
                                }))}
                                value={formValues['province']}
                                onChange={(value) =>
                                    handleChange({
                                        target: { name: 'province', value },
                                    } as any)
                                }
                            />

                            <label className="job-assistant-page__checkbox-label">
                                <input
                                    name="checkbox"
                                    type="checkbox"
                                    className="job-assistant-page__checkbox-input"
                                />
                                {translate(
                                    'app.job_assistant_page.only_remote'
                                )}
                            </label>

                            <Button
                                disabled={submitButtonIsDisabled}
                                onClick={handleSubmit}
                            >
                                {translate('app.job_assistant_page.signin')}
                            </Button>
                        </form>
                    </AnimatedSlide>
                ) : (
                    <div className="job-assistant-page__success-message">
                        <AnimatedCheck />

                        <AnimatedSlide delay={200}>
                            <div className="job-assistant-page__success-message-inner-container">
                                <span className="job-assistant-page__thanks">
                                    {translate(
                                        'app.job_assistant_page.success_signin_feedback'
                                    )}
                                </span>

                                <p className="job-assistant-page__explanation">
                                    {translate(
                                        'app.job_assistant_page.feature_explain'
                                    )}
                                </p>
                            </div>
                        </AnimatedSlide>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobAssistantPage;
