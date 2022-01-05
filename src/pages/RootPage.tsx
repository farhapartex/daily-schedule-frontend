import React from "react";
import { Container } from "react-bootstrap";
import "../static/css/RootPage.css";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const RootPage = ()=> {
    return (
        <div id="rootPage">
            <Container fluid>
                <div className="row">
                    <LeftSide />
                    <RightSide />
                </div>
            </Container>
        </div>
    )
}


export default RootPage;