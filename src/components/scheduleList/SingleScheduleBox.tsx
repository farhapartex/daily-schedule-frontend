import React from "react";
import { SingleScheduleBoxProp } from "./interfaaces";

const SingleScheduleBox: React.FC<SingleScheduleBoxProp> = (props)=> {
    const {title, time, medium} = props;

    return (
        <div className="col-3 mb-5">
            <div className="singleScheduleBox pt-3 pb-3">
                <p className="text-center">{title}</p>
                <p className="text-center">{time} | {medium}</p>
                <p className="text-center"><a href="/schedule/1/update" id="reschedule">Reschedule</a></p>
            </div>
        </div>
    )
}


export default SingleScheduleBox;