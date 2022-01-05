import React from "react";
import SchedulePresentation from "./SchedulePresentation";
import "../static/css/Dashboard.css";

const Dashboard = ()=> {
    return (
        <div className="p-3" id="dashboard">
            <div className="pl-5 mt-3 mb-5">
                <h4 className="mt-4">Dec 2021 - Jan 2022</h4>
            </div>

            <SchedulePresentation />
        </div>
    )
}

export default Dashboard;