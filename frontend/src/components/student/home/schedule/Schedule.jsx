import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import LectureApi from "../../../../api/LectureApi";

import "../../../../css/schedule.css";

// ========================================================================
// Lecture schedule in Island - student home page
export default function Schedule() {
  const [status, setStatus] = useState(0);
  const [lectures, setLectures] = useState([]);
  const [date] = useState(moment().format("yyyy-MM-DD"));

  const getLectureByDate = () => {
    LectureApi.getLectureByUnlockDate(date).then((res) =>
      setLectures(res.data)
    );
  };

  useEffect(() => {
    getLectureByDate();
  }, []);

  useEffect(() => {
    if (lectures.length !== 0) {
      setStatus(1);
    }
  }, [lectures]);

  return (
    <div>
      <div
        id="student-home-schedule-wrapper1"
        className="student-home-schedule-wrapper"
      >
        <img src="/assets/img/css/lecture-bg.svg" alt="background" />
      </div>
      <div id="student-home-schedule1" className="student-home-schedule">
        <h5>
          {moment().format("MM/DD")} lecture <i className="fas fa-glasses"></i>
        </h5>
        {status === 1 ? (
          <table>
            <tbody>
              {lectures.map((lecture) => {
                const lectureUrl = "/lecture/" + lecture.id;
                const myKey = "lecturelink" + lecture.id;
                const isCurrentLecture =
                  moment().format("HH") ===
                  moment(lecture.unlockTime).format("HH");
                const lectureLinkClass = isCurrentLecture ? "highlited-a" : "";
                const nowSign = isCurrentLecture ? (
                  <span className="currentLectureSign animate__animated animate__rubberBand animate__repeat-3">
                    GO NOW
                  </span>
                ) : (
                  ""
                );

                return (
                  <tr>
                    <th>{moment(lecture.unlockTime).format("H:mm")}</th>
                    <td>
                      <div>
                        <Link to={lectureUrl} className={lectureLinkClass}>
                          {lecture.title}
                          {nowSign}
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h6>No lecture</h6>
        )}

        {/*           <tr className="bg-primary">
            <td>{lectures[0].subject}</td>
            <td>{lectures[0].time}</td>
          </tr>
          <tr className="bg-info">
            <td>{lectures[1].subject}</td>
            <td>{lectures[1].time}</td>
          </tr>
          <tr className="bg-warning">
            <td>{lectures[2].subject}</td>
            <td>{lectures[2].time}</td>
          </tr>
          <tr className="bg-success">
            <td>{lectures[3].subject}</td>
            <td>{lectures[3].time}</td>
          </tr> */}
      </div>
    </div>
  );
}
