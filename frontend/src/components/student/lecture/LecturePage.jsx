import { useEffect, useState } from "react";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

import LectureApi from "../../../api/LectureApi";

import "../../../css/student/lecture.css";

// ========================================================================
// Student lecture page - Each lecture opened
export default function LecturePage({ match }) {
  const lectureId = Number(match.match.params.id);

  const [lecture, setLecture] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    LectureApi.getLectureById(lectureId).then((res) => {
      const videoID = res.data.youtubeUrl;

      // Temporary solution to see If we can use Lecture form for zoom link
      if (res.data.youtubeUrl !== null) {
        res.data.youtubeUrl = "https://www.youtube.com/embed/" + videoID;
      }
      setLecture(res.data);
    });
  }, []);

  useEffect(() => {
    if (lecture.length !== 0) {
      setStatus(1);
    }
  }, [lecture]);

  return (
    <div className="body-wrapper">
      {status === 1 && (
        <div>
          <div className="lecture-title-wrapper">
            <h2>
              <i className="fas fa-glasses"></i> {lecture.title}{" "}
              <i className="fas fa-glasses"></i>
            </h2>
            {moment(lecture.unlockTime).format("YYYY-MM-DD HH:mm")}
          </div>

          {lecture.youtubeUrl !== null && (
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
          )}
          
          {lecture.zoomLink !== null && (
            <div className="youtube-wrapper">
              <iframe
                title="zoom"
                width="560"
                height="315"
                src={lecture.zoomLink}
                frameborder="0"
                allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}
          <div className="lecture-details">
            <div className="lecture-text">
              <div className="lecture-text-title">
                <h2>
                  <i className="fas fa-glasses"></i> {lecture.title}{" "}
                  <i className="fas fa-glasses"></i>
                </h2>
                {moment(lecture.unlockTime).format("YYYY-MM-DD HH:mm")}
              </div>
              {ReactHtmlParser(lecture.body)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
