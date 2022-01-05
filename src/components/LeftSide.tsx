import React from "react";
import { SidebarMenu, SidebarProfileInfo } from "./sidebar";
import profile from "../static/images/profile.jpg";

const LeftSide = ()=> {
    return (
        <div className="col-2" id="leftSide">
            <div id="brandName" className="pt-4 pb-3">
                <h4 className="text-center">Daily Schedule</h4>
            </div>

            <SidebarProfileInfo imagePath={profile}/>

            <SidebarMenu />
        </div>
    )
}

export default LeftSide;