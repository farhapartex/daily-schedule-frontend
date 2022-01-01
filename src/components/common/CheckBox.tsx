import React from "react";
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";
import { CheckBoxProps } from "./CommonProps";

const CheckBox = (props: CheckBoxProps)=> {
    const {id, label, name, value, handleChange} = props;


    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Check type="checkbox" name={name} onChange={(e)=>{handleChange(e.target.checked)}} label={label} />
        </Form.Group>
    )
}

export default CheckBox;