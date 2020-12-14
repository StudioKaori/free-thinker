import "../../../css/student/worldmap.css";
import moment from "moment";
import { useEffect, useState } from "react";
import WorldMapIslandCard from "./WorldMapIslandCard";

export default function WorldMap() {
  const [islands, setIslands] = useState([]);
  const [status, setStatus] = useState(0);

  const fakeDB = [
    {
      id: 1,
      date: "2020-12-12",
      isDone: true,
      city: "Stockholm",
      monster: "oni",
      islandTheme: "island-green",
    },

    {
      id: 2,
      date: "2020-12-13",
      isDone: true,
      city: "Stockholm",
      monster: "kurage",
      islandTheme: "island-ice",
    },

    {
      id: 3,
      date: "2020-12-14",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
      islandTheme: "island-desert",
    },

    {
      id: 4,
      date: "2020-12-15",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
      islandTheme: "island-green-volcano",
    },

    {
      id: 5,
      date: "2020-12-16",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
      islandTheme: "island-green",
    },
  ];

  const setIslandCard = () => {
    const cards = fakeDB.map((island, index) => {
      const key = "worldmapIsland" + index;
      return <WorldMapIslandCard key={key} island={island} />;
    });
    setIslands(cards);
  };

  useEffect(() => {
    setIslandCard();
  }, []);

  return (
    <div className="worldMap">
      <div className="worldMap-img">
        <img
          src="/assets/img/css/worldmap/world-map-with-path.png"
          alt="world map"
        />

        <div className="worldMap-island">{islands}</div>
      </div>
    </div>
  );
}
