import React from "react";
import { Container } from "react-bootstrap";
import { SingleScheduleBox } from "./scheduleList";
import "../static/css/Dashboard.css";

const Dashboard = ()=> {
    return (
        <div className="w-100 p-3" id="dashboard">
            <div className="pageHeading">
                <h4 className="mt-4">Today | 05 December 2021</h4>
            </div>

            <Container fluid>
                <div className="row mt-5">
                    <SingleScheduleBox title="Metting with Daniel" time="10:45 am" medium="Skype"/>
                    <SingleScheduleBox title="Metting with Jhon" time="12:15 pm" medium="Google Meet"/>
                    <SingleScheduleBox title="Coffee time" time="12:35 pm" medium="No Medium"/>
                    <SingleScheduleBox title="Tech Interview with Nazmul" time="03:00 pm" medium="Google Meet"/>
                    <SingleScheduleBox title="Tech Talk with team" time="06:00 pm" medium="Google Meet"/>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard;