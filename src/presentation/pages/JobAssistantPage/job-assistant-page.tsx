import { useEffect, useState } from 'react';

import {
    AnimatedCheck,
    AnimatedSlide,
    AppSelect,
    Button,
    TypingAnimatedText,
} from '@/presentation/components';

import useSessionStorage from '@/presentation/hooks/useSessionStorage';
import useFormValidation from '@/presentation/hooks/useFormValidation';

import './job-assistant-page.scss';
import { spainProvinces } from '@/presentation/utils';

const initialValues = {
    name: '',
    email: '',
    offerTitle: '',
    province: '',
};

const validationRules = {
    email: (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    },
};

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

    const handleSubmit = () => {
        console.log(formValues);
        setFormIsVisible(false);
    };

    const defineFieldStatus = (fieldName: string) => {
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
                        text="¡Bienvenid@ al Job Assistant de infoJobs tools!"
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
                                    Job Assistant
                                </h3>
                            </header>

                            <label
                                className={`job-assistant-page__label ${defineFieldStatus(
                                    'name'
                                )}`}
                            >
                                Nombre:
                                <input
                                    name="name"
                                    type="text"
                                    className="job-assistant-page__input"
                                    value={formValues['name']}
                                    onChange={handleChange}
                                />
                            </label>

                            <label
                                className={`job-assistant-page__label ${defineFieldStatus(
                                    'email'
                                )}`}
                            >
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    value={formValues['email']}
                                    className={`job-assistant-page__input`}
                                    onChange={handleChange}
                                />
                            </label>

                            <label
                                className={`job-assistant-page__label ${defineFieldStatus(
                                    'offerTitle'
                                )}`}
                            >
                                Buscas ofertas de...
                                <input
                                    name="offerTitle"
                                    value={formValues['offerTitle']}
                                    type="text"
                                    className="job-assistant-page__input"
                                    onChange={handleChange}
                                />
                            </label>

                            <AppSelect
                                label="en..."
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
                                Buscar solo ofertas en remoto
                            </label>

                            <Button
                                disabled={submitButtonIsDisabled}
                                onClick={handleSubmit}
                            >
                                Registrarse en Job Assistant
                            </Button>
                        </form>
                    </AnimatedSlide>
                ) : (
                    <div className="job-assistant-page__success-message">
                        <AnimatedCheck />

                        <AnimatedSlide delay={1000}>
                            <div className="job-assistant-page__success-message-inner-container">
                                <span className="job-assistant-page__thanks">
                                    ¡Gracias por suscribirte!
                                </span>

                                <p className="job-assistant-page__explanation">
                                    No volverás a perder tiempo buscando
                                    ofertas, tu Job Assitant te enviará todos
                                    los dias las mejores ofertas de InfoJobs
                                    segun tus criterios.
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
