import {Field} from "formik";
import {FormControl, FormErrorMessage, Input} from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const TextField = ({
    isInvalid,
    errorMessage,
    fieldName,
    ...inputProps
}) => (
    <Field name={fieldName}>
        {({field}) => (
            <FormControl isInvalid={isInvalid}>
                <Input
                    {...field}
                    {...inputProps}
                />
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
        )}
    </Field>
);

TextField.propTypes = {
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    props: PropTypes.object
}

export default TextField;