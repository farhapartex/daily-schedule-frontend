import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker';
import Proptypes from "prop-types";
import { Form } from "react-bootstrap";

const DatePicker = (props)=>{
    const {label, id} = props;

    const [dateValue, setDateValue] = useState(new Date());

    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <DateTimePicker
                onChange={setDateValue}
                minDate={new Date()}
                value={dateValue}
                className="form-control"
            />
        </Form.Group>
    )
}

DatePicker.propTypes = {
    label: Proptypes.string,
    id: Proptypes.string
}

DatePicker.defaultProps = {
    label: "",
    id: ""
}

export default DatePicker;