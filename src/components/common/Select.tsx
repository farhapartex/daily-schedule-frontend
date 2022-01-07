import React from "react";
import { Form } from "react-bootstrap";
import { SelectFieldProp } from "./CommonProps";

interface SelectOptionInterface{
    key: number,
    value: string
}

const SelectField: React.FC<SelectFieldProp> = (props)=> {
    const {label, id, optionList} = props;


    const SelectOption: React.FC<{option: SelectOptionInterface}> = ({option}) => {
        return <option key={option.key}>{option.value}</option>
    }

    const renderOptions = ()=> {
        return optionList.map((value, index) => {
            return <SelectOption option={{value:value, key:index}}/>
        })
    }

    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                {renderOptions()}
            </Form.Select>
        </Form.Group>
    )
}

export default SelectField;