import {STEPS} from "./constants";
import {StepOne} from "../components/StepOne";
import {StepTwo} from "../components/StepTwo";
import {StepThree} from "../components/StepThree";
import React from "react";

export const renderStep = ({
    errors,
    touched,
    onBack,
    onNext,
    onChange,
    setFieldValue,
    values,
}) => ({
    [STEPS.ONE]: <StepOne
        errors={errors}
        touched={touched}
        onNext={() => {
            if (!((errors.fullName && touched.fullName) || !values.fullName)) {
                onNext();
            }
        }}
        onChange={onChange}
        values={values}
    />,
    [STEPS.TWO]: <StepTwo
        errors={errors}
        touched={touched}
        onNext={() => {
            const isInvalid = ((errors.email && touched.email) || !values.email)
                || ((errors.password && touched.password) || !values.password)
                || ((errors.confirmPassword && touched.confirmPassword) || !values.confirmPassword);

            if (!isInvalid) {
                onNext();
            }
        }}
        onBack={onBack}
        onChange={onChange}
        values={values}
    />,
    [STEPS.THREE]: <StepThree
        errors={errors}
        touched={touched}
        onBack={onBack}
        values={values}
        setFieldValue={setFieldValue}
        onChange={onChange}
    />
});

export const omit = (obj, keysToOmit) => {
    const result = {};

    for (let key in obj) {
        if (!keysToOmit.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
};