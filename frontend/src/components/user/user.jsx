import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import Student from "../student/StudentHomePage";
import Teacher from "../teacher/TeacherHomePage";

export default function User() {
  const [status, setStatus] = useState(0);
  const [user] = useRecoilState(userState);

  useEffect(() => {
    if (user.length !== 0) {
      setStatus(1);
    }
  }, [user]);

  return (
    <div>
      {status === 1 ? (
        user[0].userType === "Teacher" ? (
          <Teacher />
        ) : (
          <Student />
        )
      ) : null}
    </div>
  );
}
