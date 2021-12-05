import React from "react";

const LeftSidebar = ()=> {
    return (
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
    )
}

export default LeftSidebar;