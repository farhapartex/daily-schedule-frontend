import React from "react";
import ProfileForm from "./ProfileForm";

const Profile = ()=> {
    return (
        <div className="w-100">
            <div className="pageHeading">
                <h4 className="mt-4">Profile</h4>
            </div>

            <ProfileForm />
            
        </div>
    )
}

export default Profile;