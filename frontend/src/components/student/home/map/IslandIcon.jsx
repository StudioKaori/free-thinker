import React from "react";
import { Link } from "react-router-dom";

import "../../../../css/components/island/island-icon.css";

export default function IslandIcon({
  type,
  linkUrl,
  done,
  assignmentNum,
  addLinkToIcon,
}) {
  const displayType = done === "done" ? "done" : type;
  const iconImg = "/assets/img/css/islands/icon" + assignmentNum + ".png";

  switch (displayType) {
    case "unlock":
      const imgUrl = (
        <img
          src={iconImg}
          className="island-icon animate__animated animate__rubberBand"
          alt="assignment"
          title="assignment"
        />
      );

      return addLinkToIcon ? <Link to={linkUrl}>{imgUrl}</Link> : imgUrl;

    case "done":
      return (
        <img
          src="/assets/img/css/islands/icon-done.png"
          className="island-icon animate__animated animate__rubberBand"
          alt="done"
        />
      );

    case "lock":
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="island-icon animate__animated animate__rubberBand"
        />
      );

    default:
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="island-icon animate__animated animate__rubberBand"
        />
      );
  }
}
