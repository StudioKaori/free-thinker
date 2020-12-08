import { useEffect, useState } from "react";
import moment from "moment";
import ClassDailySettingApi from "../../../api/ClassDailySettingsApi";

export default function DailySettingForm({ onClickPreview }) {
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));

  // islands
  const islands = [
    "island-green",
    "island-ice",
    "island-volcano",
    "island-desert",
    "island-green-river",
  ];
  const [islandTheme, setIslandTheme] = useState(islands[0]);

  const islandsList = islands.map((island) => {
    return (
      <li
        key={island}
        id={island}
        onClick={() => {
          setIslandTheme(island);
        }}
      >
        {island}
      </li>
    );
  });

  // DB
  const getIslandTheme = () => {
    ClassDailySettingApi.getByDate(date).then((res) => {
      res.data.length !== 0
        ? setIslandTheme(res.data.islandTheme)
        : createIslandThemeOnDb();
    });
  };

  const createSqlClassDailySettingData = () => {
    let sqlClassDailySettingData = {};
    sqlClassDailySettingData.islandTheme = islandTheme;
    sqlClassDailySettingData.date = date + "T00:00:00.0";
    return sqlClassDailySettingData;
  };

  const setIslandThemeOnDb = () => {
    const sqlClassDailySettingData = createSqlClassDailySettingData();
    ClassDailySettingApi.updateWhereDateClassDailySetting(
      sqlClassDailySettingData
    );
  };

  const createIslandThemeOnDb = () => {
    const sqlClassDailySettingData = createSqlClassDailySettingData();
    ClassDailySettingApi.createClassDailySetting(sqlClassDailySettingData);
  };

  useEffect(() => {
    getIslandTheme();
  }, []);

  useEffect(() => {
    document.getElementById("island-selector").innerText = islandTheme;
  }, [islandTheme]);

  return (
    <div>
      <h6>{date} Classroom Setting</h6>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="island-selector"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose island-theme
        </button>
        <div className="dropdown-menu" aria-labelledby="island-selector">
          <ul className="react-dropdown-list">{islandsList}</ul>
        </div>
      </div>

      <div>
        <button
          className="btn btn-info"
          onClick={() => {
            setIslandThemeOnDb();
            onClickPreview(islandTheme);
          }}
        >
          Set theme
        </button>
      </div>
    </div>
  );
}
