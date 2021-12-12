import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";

const SelectField = (props)=> {
    const {label, id, options} = props;

    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
    )
}

SelectField.propTypes = {
    label: Proptypes.string,
    options: Proptypes.array,
    id: Proptypes.string
}

SelectField.defaultProps = {
    label: "",
    options: [],
    id: ""
}

export default SelectField;