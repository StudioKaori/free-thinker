// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import Assignment from "../assignment/Assignment"

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h4 className="card-title">student</h4>
      {user[0].name}
        <Assignment />
    </div>
  );
}
