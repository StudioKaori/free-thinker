import React from "react";
import { Link } from "react-router-dom";
import lock from "../../assets/img/Lock-icon.png";
import unlock from "../../assets/img/Unlock-icon2.png";
import check from "../../assets/img/check-1-icon.png";
import thumbs from "../../assets/img/Hand-thumbs-up-like-2-icon.png";
import todo from "../../assets/img/components/navbar/logo-icon.png";
import trophy from "../../assets/img/trophy.png";
import wrong from "../../assets/img/wrong.png";

import "../../css/icons.css";

export default function mapIcon({ type, linkUrl }) {
  switch (type) {
    case "lock":
      return <img className="map-icon" src={lock} alt="Lock logo" />;
    case "unlock":
      return (
        <Link to={linkUrl}>
          <img className="map-icon" src={unlock} alt="Unlock logo" />
        </Link>
      );
    case "check":
      return <img className="map-icon" src={check} alt="Check logo" />;
    case "thumbs up":
      return <img className="map-icon" src={thumbs} alt="Thumbs up logo" />;
    case "todo":
      return <img className="map-icon" src={todo} alt="To do logo" />;
    case "trophy":
      return <img className="map-icon" src={trophy} alt="Trophy logo" />;
    case "wrong":
      return <img className="map-icon" src={wrong} alt="Wrong logo" />;
    default:
      return <img className="map-icon" src={lock} alt="Lock logo" />;
  }
}
