import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker';
import { Form } from "react-bootstrap";
import { DatePickerProp } from "./CommonProps";

const DatePicker: React.FC<DatePickerProp> = (props)=>{
    const {label, id, minDate} = props;

    const [dateValue, setDateValue] = useState(new Date());

    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <DateTimePicker
                onChange={setDateValue}
                minDate={minDate}
                value={dateValue}
                className="form-control"
            />
        </Form.Group>
    )
}

export default DatePicker;