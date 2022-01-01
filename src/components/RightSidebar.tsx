import React from "react";
import {Routes, Route,} from "react-router-dom";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Profile from "./Profile";

const RightSide = ()=> {
    return (
        <div className="col-10" id="rightSide">
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/schedule/create" element={<Schedule action="Make"/>}/>
                <Route path="/schedule/:id/update" element={<Schedule action="Update" />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </div>
    )
}

export default RightSide;