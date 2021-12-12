import React from "react";

const SidebarMenu = ()=> {
    return (
        <div id="sidebarMenu">
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/add-schedule">Schedule</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/auth">Logout</a></li>
            </ul>
        </div>
    )
}

export default SidebarMenu;