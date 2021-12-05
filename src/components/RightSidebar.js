import React from "react";
import {Routes, Route,} from "react-router-dom";
import Dashboard from "./Dashboard";

const RightSide = ()=> {
    return (
        <div className="col-10" id="rightSide">
            <Routes>
                <Route path="/" element={<Dashboard />}/>
            </Routes>
        </div>
    )
}

export default RightSide;