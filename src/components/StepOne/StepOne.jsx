import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {TextField} from "../../shared/TextField";
import {ActionButton} from "../../shared/ActionButton";

const StepOne = ({errors, touched, onNext, onChange, values}) => {
    const [fullNameValue, setFullNameValue] = useState("");

    return (
        <Box>
            <TextField
                isInvalid={errors.fullName && touched.fullName}
                errorMessage={errors.fullName}
                fieldName="fullName"
                id="fullName"
                value={values.fullName || fullNameValue}
                placeholder="Full name"
                type="text"
                onChange={(e) => {
                    setFullNameValue(e.target.value);
                    onChange(e);
                }}
            />
            <ActionButton
                text="Next"
                color="teal"
                mt={4}
                onClick={onNext}
            />
        </Box>
    );
};

StepOne.propTypes = {
    errors: PropTypes.object,
    touched: PropTypes.object,
    onClick: PropTypes.func,
    onChange: PropTypes.func
}

export default React.memo(StepOne);