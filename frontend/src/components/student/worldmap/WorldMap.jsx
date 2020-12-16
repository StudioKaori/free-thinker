import { useRecoilState } from "recoil";
import { userState } from "../../../js/state-information";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";
import moment from "moment";

import "../../../css/student/worldmap.css";

export default function WorldMap() {
  const [user] = useRecoilState(userState);
  const [studentProgresses, setStudentProgresses] = useState([]);
  const [congrats, setCongrats] = useState("");
  const [status, setStatus] = useState(0);

  const getAssignmentProgress = () => {
    console.log("user[0]", user);
    AssignmentProgressApi.getAllAssignmentProgresssByStudentId(user[0].id).then(
      (res) => {
        setStudentProgresses(res.data);
      }
    );
  };

  const citiesAndMonsters = [
    {
      city: "Stockholm",
      monster: "tori",
    },
    {
      city: "Paris",
      monster: "oni",
    },
    {
      city: "Cairo",
      monster: "namekuji",
    },
    {
      city: "Cape town",
      monster: "hara",
    },
    {
      city: "Islamabad",
      monster: "neko",
    },
    {
      city: "New delhi",
      monster: "kurage",
    },
    {
      city: "Beijing",
      monster: "",
    },
    {
      city: "Tokyo",
      monster: "",
    },
    {
      city: "Rio de Janeiro",
      monster: "",
    },
    {
      city: "New york",
      monster: "",
    },
  ];

  const getIslandCards = () => {
    return studentProgresses.map((progress, index) => {
      //console.log("progress", progress);
      const key = "worldmapIsland" + index;
      progress.city = citiesAndMonsters[index].city;
      progress.monster = citiesAndMonsters[index].monster;

      // moment(progress.classDailySetting.date).format("YYYY-MM-DD") ===
      //   moment().format("YYYY-MM-DD") && setCongrats(progress.monster);

      return <WorldMapIslandCard key={key} island={progress} />;
    });
  };

  // play paper open sound
  const playPaperSound = () => {
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
