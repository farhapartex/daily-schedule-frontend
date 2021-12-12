import React from "react";
import PropTypes from "prop-types";

const SingleScheduleBox = (props)=> {
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

SingleScheduleBox.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    medium: PropTypes.string
}

SingleScheduleBox.defaultProps = {
    title: "text",
    time: "",
    medium: "form-control"
}


export default SingleScheduleBox;