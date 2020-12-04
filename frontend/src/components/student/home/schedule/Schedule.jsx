import { useEffect, useState } from "react";
import LectureApi from "../../../../api/LectureApi";

import "../../../../css/schedule.css";

export default function Schedule() {
  const [status, setStatus] = useState(0);
  const [lectures, setLectures] = useState([]);

  const getLectureByDate = () => {
    LectureApi.getLectureByUnlockDate("2020-12-03").then((res) =>
      setLectures(res.data)
    );
  };

  useEffect(() => {
    getLectureByDate();
  }, []);

  useEffect(() => {
    console.log("lectures", lectures);
    if (lectures.length !== 0) {
      setStatus(1);
    }
  }, [lectures]);

  return (
    <div>
      {status === 1 ? (
        <table className="table table-striped table-dark">
          <caption>
            <h3>Lecture</h3>
          </caption>
          <tbody>
            <tr>
              <th colSpan="2">{lectures[0].date}</th>
            </tr>
            <tr className="bg-primary">
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
            </tr>
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
  );
}
