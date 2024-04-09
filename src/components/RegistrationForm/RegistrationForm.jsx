import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {validationSchema} from '../../validation/schema';
import {omit, renderStep} from "../../helpers/utils";

const RegistrationForm = () => {
    const initialValues = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        paymentMethod: {
            type: '',
            email: '',
            cardNumber: '',
        },
    };

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (values) => {
        const omitKeys = omit(values, "fullName");
        const data = {
            ...omitKeys,
            firstName: values.fullName.split(" ")[0],
            lastName: values.fullName.split(" ")[1]
        }

        console.log("data", data);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({touched, errors, setFieldValue, values, handleChange}) => (
                <Form style={{width: "20vw"}}>
                    {renderStep({
                        errors,
                        touched,
                        onChange: handleChange,
                        onBack: handlePrevStep,
                        onNext: handleNextStep,
                        setFieldValue,
                        values
                    })[step]}
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
