import {FormControl, FormErrorMessage, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import {Field} from "formik";
import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
    errorMessage,
    value,
    isInvalid,
    onChange,
    options,
    fieldName
}) => (
    <Field name={fieldName}>
        {() => (
            <FormControl isInvalid={isInvalid}>
                <RadioGroup value={value} onChange={onChange}>
                    <Stack direction="row">
                        {options.map((option) => (
                            <Radio key={option.value} value={option.value}>
                                {option.text}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
        )}
    </Field>
);

RadioButton.propTypes = {
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    fieldName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
}

export default RadioButton;