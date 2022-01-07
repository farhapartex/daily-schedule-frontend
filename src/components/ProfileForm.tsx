import React from "react";
import { Container, Button } from "react-bootstrap";
import { TextGroupField, SelectField } from "./common";


const ProfileForm = ()=> {
    return (
        <div className="w-50 mt-5">
            <Container fluid>
                <div className="row">
                    <div className="col-6">
                        <TextGroupField type="text" label="First Name" id="firstName" placeholder="Ex: Jhon" value={"Jhon"} handleChange={()=>{}}/>
                    </div>
                    <div className="col-6">
                        <TextGroupField type="text" label="Last Name" id="lastName" placeholder="Ex: Hares" value={"Jhon"} handleChange={()=>{}}/>
                    </div>
                    <div className="col-6">
                        <TextGroupField type="text" label="Email" id="email" placeholder="Ex: example@test.com" value={"hello@gmail.com"} handleChange={()=>{}}/>
                    </div>
                    <div className="col-6">
                        <SelectField label="Country" id="country" optionList={["Bangladesh", "India", "China", "Bhutan"]}/>
                    </div>
                    <div className="col-6">
                        <TextGroupField type="text" label="Mobile No" id="mobileNo" placeholder="Example: +8801963259875" value={"012365487"} handleChange={()=>{}}/>
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