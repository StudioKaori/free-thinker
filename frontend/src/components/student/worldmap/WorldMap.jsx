import { useRecoilState } from "recoil";
import { userState } from "../../../js/state-information";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";

import "../../../css/student/worldmap.css";
import monsters from "../../../data/citiesAndMonsters.json";

export default function WorldMap({ dailySettingId }) {
  const [user] = useRecoilState(userState);
  const [studentProgresses, setStudentProgresses] = useState([]);
  const [congrats, setCongrats] = useState(
    dailySettingId !== null ? true : false
  );
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
      //console.log("progress", progress);
      const key = "worldmapIsland" + index;
      progress.city = monsters[index].city;
      progress.monster = monsters[index].monster;

      // moment(progress.classDailySetting.date).format("YYYY-MM-DD") ===
      //   moment().format("YYYY-MM-DD") && setCongrats(progress.monster);

      return <WorldMapIslandCard key={key} island={progress} />;
    });
  };

  const showCongrats = () => {
    console.log("congrats!daily setting id", dailySettingId);
  };

  useEffect(() => {
    getAssignmentProgress();
    if (congrats) showCongrats();
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
