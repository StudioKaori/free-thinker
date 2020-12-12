import React from "react";
import { Link } from "react-router-dom";

import "../../../../css/components/island/island-icon.css";

export default function IslandIcon({ type, linkUrl, done, assignmentNum }) {
  const displayType = done === "done" ? "done" : type;
  const iconImg = "/assets/img/css/islands/icon" + assignmentNum + ".png";

  switch (displayType) {
    case "unlock":
      return (
        <Link to={linkUrl}>
          <img
            src={iconImg}
            className="island-icon animate__animated animate__rubberBand"
            alt="assignment"
          />
        </Link>
      );
    case "done":
      return (
        <img
          src="/assets/img/css/islands/icon-done.svg"
          className="island-icon"
          alt="done"
        />
      );

    case "lock":
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="island-icon"
        />
      );

    default:
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="island-icon"
        />
      );
  }
}
