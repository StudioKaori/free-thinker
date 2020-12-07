// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";

import { userState } from "../../js/state-information";
import Map from "./home/map/Map";

import "../../css/student/student-home.css";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);

  return (
    <div>
      <Map />
      <div className="body-wrapper">
        <div></div>
      </div>
    </div>
  );
}
