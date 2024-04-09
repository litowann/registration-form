import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import TextField from "../../shared/TextField/TextField";
import {ActionButton} from "../../shared/ActionButton";

const StepTwo = ({errors, touched, onNext, onBack, onChange, values}) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

    return (
        <Box>
            <TextField
                isInvalid={errors.email && touched.email}
                errorMessage={errors.email}
                fieldName="email"
                type="email"
                id="email"
                placeholder="Email"
                value={values.email || emailValue}
                onChange={(e) => {
                    setEmailValue(e.target.value);
                    onChange(e);
                }}
                mb={4}
            />
            <TextField
                isInvalid={errors.password && touched.password}
                errorMessage={errors.password}
                fieldName="password"
                type="password"
                id="password"
                placeholder="Password"
                value={values.password || passwordValue}
                onChange={(e) => {
                    setPasswordValue(e.target.value);
                    onChange(e);
                }}
                mb={4}
            />
            <TextField
                isInvalid={errors.confirmPassword && touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                fieldName="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword || confirmPasswordValue}
                onChange={(e) => {
                    setConfirmPasswordValue(e.target.value);
                    onChange(e);
                }}
            />
            <ActionButton
                text="Back"
                color="teal"
                variant="outline"
                mt={4}
                mr={4}
                onClick={onBack}
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

export default React.memo(StepTwo);