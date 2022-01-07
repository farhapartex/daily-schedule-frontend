import React from "react";
import SchdeuleForm from "../ScheduleForm";
import { ScheduleProps } from "./ScheduleProp";

const Schedule: React.FC<ScheduleProps> = (props)=> {

    const {action} = props;

    return (
        <div className="w-100">
            <div className="pageHeading">
                <h4 className="mt-4">{action} a schedule</h4>
            </div>

            <SchdeuleForm />

            
        </div>
    )
}

export default Schedule;