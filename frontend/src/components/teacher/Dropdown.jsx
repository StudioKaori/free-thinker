import React from "react";

// ========================================================================
// Dropdown list for Island Theme choice
export default function Dropdown() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-info dropdown-toggle"
        data-toggle="dropdown"
      >
        {" "}
        Theme for the day{" "}
      </button>
    </div>
  );
}
