import { useRecoilState } from "recoil";
import { userState } from "../../../js/state-information";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";

import "../../../css/student/worldmap.css";

export default function WorldMap() {
  const [user] = useRecoilState(userState);
  const [studentProgresses, setStudentProgresses] = useState([]);
  const [status, setStatus] = useState(0);

  const getAssignmentProgress = () => {
    console.log("user[0]", user);
    AssignmentProgressApi.getAllAssignmentProgresssByStudentId(user[0].id).then(
      (res) => {
        console.log("res", res.data);
        setStudentProgresses(res.data);
      }
    );
  };

  const getIslandCards = () => {
    return studentProgresses.map((progress, index) => {
      const key = "worldmapIsland" + index;
      return <WorldMapIslandCard key={key} island={progress} />;
    });
  };

  // play paper open sound
  const playPaperSound = () => {
    console.log("sound");
    const audio = new Audio("/assets/sound/paper-open.mp3");
    audio.muted = true;
    audio.play();
  };

  useEffect(() => {
    getAssignmentProgress();
  }, []);

  useEffect(() => {
    if (studentProgresses.length !== 0) {
      setStatus(1);
    }
  }, [studentProgresses]);

  return (
    <div className="worldMap">
      <div className="worldMap-img">
        <img
          src="/assets/img/css/worldmap/world-map-with-path.png"
          alt="world map"
        />

        <div className="worldMap-island">
          {status === 1 && getIslandCards()}
        </div>
      </div>
    </div>
  );
}
