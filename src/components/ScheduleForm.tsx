import React from "react";
import { Container, Button } from "react-bootstrap";
import { TextGroupField, DatePicker, SelectField } from "./common";

const SchdeuleForm = ()=> {
    return (
        <div className="schdeuleForm w-50">
            <Container fluid>
                <div className="row mt-5">
                    <div className="col-6">
                        <TextGroupField type="text" label="Title *" id="title" placeholder="Type schedule title" value={"Test event"} handleChange={()=>{}}/>
                    </div>
                    <div className="col-6">
                        <SelectField label="Event Type *" id="eventType" optionList={["General", "Out of office", "Task", "Reminder"]}/>
                    </div>

                    <div className="col-6">
                        <DatePicker label="Date & Time *" id="scheduleDateTime" minDate={new Date()}/>
                    </div>

                    <div className="col-6">
                        <TextGroupField type="text" label="Guest Email" id="medium" placeholder="Add email by using comma" value={"hasan08sust@gmail.com,"} handleChange={()=>{}}/>
                    </div>

                    <div className="col-12">
                        <Button variant="info" className="mt-3 baseButton">Create Schedule</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SchdeuleForm;