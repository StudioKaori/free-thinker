import { useEffect, useState } from "react";
import LectureApi from "../../../api/LectureApi";
import ReactHtmlParser from "react-html-parser";

import "../../../css/student/lecture.css";

export default function LecturePage({ match }) {
  const lectureId = Number(match.match.params.id);

  const [lecture, setLecture] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    LectureApi.getLectureById(lectureId).then((res) => {
      const youtubeID = res.data.youtubeUrl;
      res.data.youtubeUrl = "https://www.youtube.com/embed/" + youtubeID;
      setLecture(res.data);
    });
  }, []);

  useEffect(() => {
    if (lecture.length !== 0) {
      setStatus(1);
      console.log(lecture);
    }
  }, [lecture]);

  return (
    <div className="body-wrapper">
      {status === 1 && (
        <div>
          <div className="youtube-wrapper">
            <iframe
              title="youtube"
              width="560"
              height="315"
              src={lecture.youtubeUrl}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2>{lecture.title}</h2>
          {ReactHtmlParser(lecture.body)}
        </div>
      )}
    </div>
  );
}
