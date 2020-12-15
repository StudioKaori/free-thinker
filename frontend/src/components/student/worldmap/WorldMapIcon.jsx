import React from "react";

import "../../../css/components/island/island-icon.css";

export default function WorldMapIcon({ type, done }) {
  const displayType = done ? "done" : type;

  switch (displayType) {
    case "unlock":
      const imgUrl = (
        <img
          src="/assets/img/css/islands/icon-unlock.png"
          className="worldmap-icon animate__animated animate__rubberBand"
          alt="assignment"
          title="assignment"
        />
      );

      return imgUrl;

    case "done":
      return (
        <img
          src="/assets/img/css/islands/icon-done.png"
          className="worldmap-icon animate__animated animate__rubberBand"
          alt="done"
        />
      );

    case "lock":
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="worldmap-icon animate__animated animate__rubberBand"
        />
      );

    default:
      return (
        <img
          src="/assets/img/css/islands/icon-lock.png"
          alt="locked assignment"
          className="worldmap-icon animate__animated animate__rubberBand"
        />
      );
  }
}
