import React from "react";
import { Container, Button } from "react-bootstrap";
import { TextGroupField, DatePicker } from "./common";

const SchdeuleForm = ()=> {
    return (
        <div className="schdeuleForm">
            <Container fluid>
                <div className="row">
                    <div className="col-3">
                        <TextGroupField label="Title *" id="title" placeholder="Type schedule title"/>
                    </div>

                    <div className="col-3">
                        <DatePicker label="Date & Time *" id="scheduleDateTime"/>
                    </div>

                    <div className="col-3">
                        <TextGroupField label="Medium" id="medium" placeholder="Type the medium if any have"/>
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