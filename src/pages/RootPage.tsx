import React from "react";
import { Container } from "react-bootstrap";
import "../static/css/RootPage.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSide from "../components/RightSidebar";

const RootPage = ()=> {
    return (
        <div id="rootPage">
            <Container fluid>
                <div className="row">
                    <LeftSidebar />
                    <RightSide />
                </div>
            </Container>
        </div>
    )
}


export default RootPage;