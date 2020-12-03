import { useEffect, useState } from "react";

// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";

import { userState } from "../../js/state-information";
import Map from "./home/map/Map";

import LectureApi from "../../api/LectureApi";

import "../../css/student/student-home.css";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);

  // lecture

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
  }, [lectures]);

  return (
    <div>
      <div className="student-home-map-wrapper">
        {/* <div className="student-home-map"> */}
        <div>
          <Map />
        </div>
      </div>
      <div className="body-wrapper">
        <div>{user[0].name}</div>
      </div>
    </div>
  );
}
