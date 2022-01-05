import React from "react";
import { Form } from "react-bootstrap";
import { SelectFieldProp } from "./CommonProps";

const SelectField: React.FC<SelectFieldProp> = (props)=> {
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

export default SelectField;