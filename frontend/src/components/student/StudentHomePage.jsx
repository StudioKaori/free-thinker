// These two lines are to get user information and other shared statement
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);

  return (
    <div>
      <div className="body_wrapper">{user[0].name}</div>
    </div>
  );
}
