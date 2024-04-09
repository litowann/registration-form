import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import {RadioButton} from "../../shared/RadioButton";
import {OPTIONS, PAYMENT_METHODS} from "./constants";
import PropTypes from "prop-types";
import {TextField} from "../../shared/TextField";
import {ActionButton} from "../../shared/ActionButton";

const StepThree = ({
    errors,
    touched,
    values,
    setFieldValue,
    onBack,
    onChange
}) => {
    const [ppValue, setPpValue] = useState("");
    const [ccValue, setCcValue] = useState("");

    return (
        <Box>
            <RadioButton
                errorMessage={errors.paymentMethod?.type}
                value={values.paymentMethod.type}
                isInvalid={errors.paymentMethod?.type && touched.paymentMethod?.type}
                onChange={(value) => setFieldValue('paymentMethod.type', value)}
                fieldName="paymentMethod.type"
                options={OPTIONS}
            />
            {values.paymentMethod.type === PAYMENT_METHODS.PP && (
                <TextField
                    isInvalid={errors.paymentMethod?.email && touched.paymentMethod?.email}
                    errorMessage={errors.paymentMethod?.email}
                    fieldName="paymentMethod.email"
                    id="paymentEmail"
                    value={values.paymentMethod.email || ppValue}
                    placeholder="PayPal Email"
                    type="email"
                    onChange={(e) => {
                        setPpValue(e.target.value);
                        onChange(e);
                    }}
                    mt={4}
                />
            )}
            {values.paymentMethod.type === PAYMENT_METHODS.CC && (
                <TextField
                    isInvalid={errors.paymentMethod?.cardNumber && touched.paymentMethod?.cardNumber}
                    errorMessage={errors.paymentMethod?.cardNumber}
                    fieldName="paymentMethod.cardNumber"
                    id="cardNumber"
                    value={values.paymentMethod.cardNumber || ccValue}
                    placeholder="Credit Card Number"
                    type="number"
                    onChange={(e) => {
                        setCcValue(e.target.value);
                        onChange(e);
                    }}
                    mt={4}
                />
            )}
            <ActionButton
                text="Back"
                color="teal"
                variant="outline"
                mt={4}
                mr={4}
                onClick={onBack}
            />
            <ActionButton
                text="Submit"
                mt={4}
                type="submit"
            />
        </Box>
    );
};

StepThree.propTypes = {
    errors: PropTypes.object,
    touched: PropTypes.object,
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func,
    onBack: PropTypes.func,
    onChange: PropTypes.func
}

export default React.memo(StepThree);