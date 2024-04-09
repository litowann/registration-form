import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Required')
        .matches(/^[a-zA-Z]{3,} [a-zA-Z]{3,}$/, 'Full name must have at least 2 words with 3 letters minimum each'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Must contain at least one number')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    paymentMethod: Yup.object().shape({
        type:  Yup.string().required("Payment method is required"),
        email: Yup.string().when('type', {
            is: 'pp',
            then: () => Yup.string().email('Invalid email').required('Email is required for Credit Card payment'),
        }),
        cardNumber: Yup.string().when('type', {
            is: 'cc',
            then: () => Yup.string().matches(/^\d{16}$/, 'Invalid card number').required('Card number is required for Credit Card payment'),
        }),
    }),
});
