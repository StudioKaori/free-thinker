import { React } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Lecture(props) {
  return (
    <div className="card-body">
      <div className="card-title font-weight-bold">{props.lecture.title}</div>
      <p className="card-text">{ReactHtmlParser(props.lecture.body)}</p>
    </div>
  );
}
