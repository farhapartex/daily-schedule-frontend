import React from "react";
import SidebarMenu from "./SidebarMenu";

const LeftSidebar = ()=> {
    return (
        <div className="col-2" id="leftSide">
            <div id="brandName" className="pt-4 pb-3">
                <h4 className="text-center">Schedule</h4>
            </div>

            <SidebarMenu />
        </div>
    )
}

export default LeftSidebar;