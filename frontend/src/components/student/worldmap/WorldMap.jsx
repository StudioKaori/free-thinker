import { useRecoilState } from "recoil";
import { userState } from "../../../js/state-information";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";
import Congrats from "../assignment/Congrats";

import "../../../css/student/worldmap.css";
import monsters from "../../../data/citiesAndMonsters.json";

export default function WorldMap({ showCongrats, monster }) {
  console.log("monster", monster);
  const [user] = useRecoilState(userState);
  const [studentProgresses, setStudentProgresses] = useState([]);
  const [congrats] = useState(showCongrats === "true" ? true : false);
  const [status, setStatus] = useState(0);

  const getAssignmentProgress = () => {
    AssignmentProgressApi.getAllAssignmentProgresssByStudentId(user[0].id).then(
      (res) => {
        setStudentProgresses(res.data);
      }
    );
  };

  const getIslandCards = () => {
    return studentProgresses.map((progress, index) => {
      const key = "worldmapIsland" + index;
      progress.city = monsters[index].city;
      progress.monster = monsters[index].monster;

      return <WorldMapIslandCard key={key} island={progress} />;
    });
  };

  const deleteCongrats = () => {
    document.getElementById("popupStoryWindow").remove();
    getAssignmentProgress();
  };

  useEffect(() => {
    getAssignmentProgress();
    if (congrats) setTimeout(deleteCongrats, 4000);
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
      {congrats && (
        <div id="popupStoryWindow" className="popupWindow">
          <Congrats key="congrats" />
        </div>
      )}
    </div>
  );
}
