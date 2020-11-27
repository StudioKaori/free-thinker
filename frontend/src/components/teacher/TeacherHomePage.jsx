// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import LecturePage from "../lecture/LecturePage";


export default function TeacherHomePage() {
  // To get user information, just use user below
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h4 className="card-title">Teacher</h4>
      {user[0].name}
      <LecturePage />
    </div>
  );
}
