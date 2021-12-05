import React from "react";
import { Container } from "react-bootstrap";
import "../static/css/RootPage.css";

const RootPage = ()=> {
    return (
        <div id="rootPage">
            <Container fluid>
                <div className="row">
                    <div className="col-2" id="leftSide">
                        <div id="brandName" className="pt-4 pb-3">
                            <h4 className="text-center">Schedule</h4>
                        </div>

                        <div id="sidebarMenu">
                            <ul>
                                <li><a href="/">Dashboard</a></li>
                                <li><a href="/">Schedule</a></li>
                                <li><a href="/">Profile</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-10" id="rightSide"></div>
                </div>
            </Container>
        </div>
    )
}


export default RootPage;