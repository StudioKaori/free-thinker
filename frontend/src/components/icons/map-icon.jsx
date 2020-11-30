import React from "react";
import lock from "../../assets/img/Lock-icon.png";
import unlock from "../../assets/img/Unlock-icon2.png";
import check from "../../assets/img/check-1-icon.png";
import thumbs from "../../assets/img/Hand-thumbs-up-like-2-icon.png";

import "../../css/icons.css";

export default function mapIcon({type}) {

    switch(type) {
        case "lock":
            return <img className="map-icon" src={lock} alt="Lock logo"/>;
        case "unlock":
            return <img className="map-icon" src={unlock} alt="Unlock logo"/>;
        case "check":
            return <img className="map-icon" src={check} alt="Check logo"/>;
        case "thumbs up":
            return <img className="map-icon" src={thumbs} alt="Thumbs up logo"/>;

    }
}