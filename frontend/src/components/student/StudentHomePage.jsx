// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

import "../../css/student-home.css";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);

  return (
    <div>
      <div className="student-home-map-wrapper">
        <div className="student-home-map"> </div>
      </div>

      <div className="body-wrapper">
        <div>{user[0].name}</div>
      </div>
    </div>
  );
}