import React from "react";
import { Form } from "react-bootstrap";
import { TextGroupProp } from "./CommonProps";

const TextGroupField: React.FC<TextGroupProp> = (props: TextGroupProp)=> {
    const {label, id, type, value, handleChange, placeholder } = props
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} value={value} onChange={(e)=>{handleChange(e.target.value)}} placeholder={placeholder} />
        </Form.Group>
    )
}

export default TextGroupField;