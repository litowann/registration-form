import React from "react";
import {Button} from "@chakra-ui/react";
import PropTypes from "prop-types";

const ActionButton = ({text, onClick, type = "button", color = "blue", ...props}) => (
    <Button {...props} colorScheme={color} onClick={onClick} type={type}>
        {text}
    </Button>
);

ActionButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    color: PropTypes.string
}

export default ActionButton;