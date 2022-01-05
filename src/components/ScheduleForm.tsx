import React from "react";
import { Container, Button } from "react-bootstrap";
import { TextGroupField, DatePicker } from "./common";

const SchdeuleForm = ()=> {
    return (
        <div className="schdeuleForm">
            <Container fluid>
                <div className="row">
                    <div className="col-3">
                        <TextGroupField type="text" label="Title *" id="title" placeholder="Type schedule title" value={"Hello"} handleChange={()=>{}}/>
                    </div>

                    <div className="col-3">
                        <DatePicker label="Date & Time *" id="scheduleDateTime" minDate={new Date()}/>
                    </div>

                    <div className="col-3">
                        <TextGroupField type="text" label="Medium" id="medium" placeholder="Type the medium if any have" value={"Hello"} handleChange={()=>{}}/>
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