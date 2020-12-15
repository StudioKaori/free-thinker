import "../../../css/student/worldmap.css";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";

export default function WorldMap() {
  const [studentProgresses, setStudentProgresses] = useState([]);
  const [status, setStatus] = useState(0);

  const getAssignmentProgress = () => {
    AssignmentProgressApi.getAllAssignmentProgresss().then((res) => {
      console.log("res", res.data);
      setStudentProgresses(res.data);
    });
  };

  // const fakeDB = [
  //   {
  //     id: 1,
  //     date: "2020-12-12",
  //     isDone: true,
  //     city: "Stockholm",
  //     monster: "oni",
  //     islandTheme: "island-green",
  //   },

  //   {
  //     id: 2,
  //     date: "2020-12-13",
  //     isDone: true,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-ice",
  //   },

  //   {
  //     id: 3,
  //     date: "2020-12-14",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-desert",
  //   },

  //   {
  //     id: 4,
  //     date: "2020-12-15",
  //     isDone: true,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green-volcano",
  //   },

  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  //   {
  //     id: 5,
  //     date: "2020-12-16",
  //     isDone: false,
  //     city: "Stockholm",
  //     monster: "kurage",
  //     islandTheme: "island-green",
  //   },
  // ];

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
