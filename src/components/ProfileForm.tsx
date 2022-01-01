import React from "react";
import { Container, Button } from "react-bootstrap";
import { TextGroupField, SelectField } from "./common";


const ProfileForm = ()=> {
    return (
        <div className="w-50 mt-5">
            <Container fluid>
                <div className="row">
                    <div className="col-6">
                        <TextGroupField label="First Name" id="firstName" placeholder="Ex: Jhon"/>
                    </div>
                    <div className="col-6">
                        <TextGroupField label="Last Name" id="lastName" placeholder="Ex: Hares"/>
                    </div>
                    <div className="col-6">
                        <TextGroupField label="Email" id="email" placeholder="Ex: example@test.com"/>
                    </div>
                    <div className="col-6">
                        <SelectField label="Country" id="country" options={[]}/>
                    </div>
                    <div className="col-6">
                        <TextGroupField label="Mobile No" id="mobileNo" placeholder="Example: +8801963259875"/>
                    </div>

                    <div className="col-12">
                        <Button variant="info" className="mt-3 baseButton">Update Profile</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileForm;