import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

export default function Student() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h4 className="card-title">student</h4>
      {user[0].name}
    </div>
  );
}
