import React from "react";
import { Alert } from "react-bootstrap";
import { BannerProps } from "./BannerProp";

const Banner: React.FC<BannerProps> = (props)=> {
    const {type, message, handleCloseBanner} = props;

    return (
        <Alert variant={type} onClose={() => handleCloseBanner(false)} dismissible>{message}</Alert>
    )
}


export default Banner;