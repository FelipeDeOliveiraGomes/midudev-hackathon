import { useState, useEffect } from 'react';

type FormValues = {
    [key: string]: string;
};

type Errors = {
    [key: string]: string;
};

type FormValidationProps = {
    initialValues: FormValues;
    validationRules: { [key: string]: (value: string) => boolean };
    setSubmitButtonState: (state: boolean) => void;
};

const useFormValidation = ({
    initialValues,
    validationRules,
    setSubmitButtonState,
}: FormValidationProps) => {
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<Errors>({});

    useEffect(() => {
        const validateForm = () => {
            const newErrors: Errors = {};

            for (const field in formValues) {
                const value = formValues[field];
                const validationRule = validationRules[field];

                if (validationRule) {
                    const isValid = validationRule(value);
                    if (!isValid) {
                        newErrors[field] = 'Campo inválido';
                    }
                } else if (!value) {
                    newErrors[field] = 'Campo obrigatório';
                }
            }

            setErrors(newErrors);
            setSubmitButtonState(Object.keys(newErrors).length !== 0);
        };

        validateForm();
    }, [formValues, validationRules, setSubmitButtonState]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return {
        formValues,
        errors,
        handleChange,
    };
};

export default useFormValidation;
