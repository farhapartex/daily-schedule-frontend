import React from "react";
import { SidebarProfileProp } from "./SidebarProps";

const SidebarProfileInfo: React.FC<SidebarProfileProp> = (props)=>{
    const {imagePath} = props;

    return (
        <div id="sidebarProfile" className="w-100">
            <img src={imagePath} className="mx-auto"/>
            <div id="basicprofileInfo" className="mt-3">
                <p className="text-center">Md Nazmul Hasan</p>
                <p className="text-center">hasan08sust@gmail.com</p>
            </div>
            
        </div>
    )
}

export default SidebarProfileInfo;