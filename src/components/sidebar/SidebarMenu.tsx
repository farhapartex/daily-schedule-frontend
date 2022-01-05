import React from "react";

const SidebarMenu = ()=> {
    return (
        <div id="sidebarMenu" className="mt-5">
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/schedule/create">Schedule</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/auth">Logout</a></li>
            </ul>
        </div>
    )
}

export default SidebarMenu;