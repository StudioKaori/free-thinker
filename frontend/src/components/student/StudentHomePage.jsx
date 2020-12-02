// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";

import { userState } from "../../js/state-information";
import StudentAssignmentPage from "../assignment/StudentAssignmentPage"
import Map from "./home/map/Map";

import "../../css/student/student-home.css";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);
  
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

      <StudentAssignmentPage />
    </div>
  );
}
