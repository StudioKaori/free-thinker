import { useEffect, useState } from "react";
import moment from "moment";

export default function DailySettingForm() {
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));

  // islands
  const [islandTheme] = useState("");
  const islands = [
    "island-green",
    "island-ice",
    "island-volcano",
    "island-desert",
    "island-green-river",
  ];

  const islandsList = islands.map((island) => {
    return <li>{island}</li>;
  });

  // DB
  const getIslandTheme = () => {};

  useEffect(() => {}, []);

  return (
    <div>
      <h6>{moment().format("yyyy/MM/DD")} Classroom Setting</h6>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="island-selector"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <ul>{islandsList}</ul>
        </div>
      </div>
    </div>
  );
}
