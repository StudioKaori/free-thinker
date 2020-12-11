import { useEffect, useState } from "react";
import LectureApi from "../../../../api/LectureApi";
import moment from "moment";
import { Link } from "react-router-dom";

import "../../../../css/schedule.css";

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
    <div className="student-home-schedule-wrapper">
      <div className="student-home-schedule-wrapper">
        <img src="assets/img/css/lecture-bg.svg" />
      </div>
      <div className="student-home-schedule">
        <h6>LECTURE</h6>
        {status === 1 ? (
          <table>
            <tbody>
              {lectures.map((lecture) => {
                const lectureUrl = "/lecture/" + lecture.id;
                const myKey = "lecturelink" + lecture.id;
                return (
                  <tr key={myKey}>
                    <th>{moment(lecture.unlockTime).format("H:mm")}</th>
                    <td>
                      <div>
                        <Link to={lectureUrl}>{lecture.title}</Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No lecture</p>
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
