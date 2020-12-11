import { useEffect, useState } from "react";
import LectureApi from "../../../api/LectureApi";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import Schedule from "../home/schedule/Schedule";

import "../../../css/student/lecture.css";

export default function LecturePage({ match }) {
  const lectureId = Number(match.match.params.id);

  const [lecture, setLecture] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    LectureApi.getLectureById(lectureId).then((res) => {
      const videoID = res.data.youtubeUrl;

      // Temporary solution to see If we can use Lecture form for zoom link
      if (videoID.match("zoom")) {
        res.data.youtubeUrl = videoID;
      } else {
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

          <div>{ReactHtmlParser(lecture.body)}</div>

          <div>
            <Schedule />
          </div>
        </div>
      )}
    </div>
  );
}
