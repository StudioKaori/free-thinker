import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function TeacherHomePage() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h4 className="card-title">Teacher</h4>
      {user[0].name}
    </div>
  );
}
