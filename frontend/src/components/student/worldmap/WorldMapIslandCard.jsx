import moment from "moment";
import { Link } from "react-router-dom";
import WorldMapIcon from "./WorldMapIcon";

export default function WorldMapIslandCard({ island }) {
  const date = moment(island.classDailySetting.date).format("YYYY-MM-DD");
  const islandImg =
    "/assets/img/css/islands/" + island.classDailySetting.islandTheme + ".png";
  const monsterImg = "/assets/img/monsters/" + island.monster + ".png";
  const isVisible = island.assignmentsOfTheDayIsDone
    ? "worldmap-visible"
    : "worldmap-invisible";
  const showCityName = island.assignmentsOfTheDayIsDone
    ? "worldmap-show"
    : "worldmap-hide";
  const iconType = date < moment().format("YYYY-MM-DD") ? "unlock" : "lock";
  const isDone = island.assignmentsOfTheDayIsDone;

  const linkUrl = "/assignment/day/" + date;
  const showIslandLink = iconType === "unlock" && !isDone ? true : false;

  return (
    <article>
      <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
        <img src={monsterImg} className={isVisible} alt="monster" />
      </div>
      <div className="island-name">
        {/* <div className={showCityName}>{island.city}</div>
        <br /> */}
        <span>{date}</span>
      </div>
      <div className="island-img animate__animated animate__rubberBand">
        <img src={islandImg} className={isVisible} alt="island" />
      </div>
      <div className="worldmap-icon animate__animated animate__rubberBand">
        {showIslandLink ? (
          <Link to={linkUrl} alt="Try assignment!" title="Try assignment!">
            <WorldMapIcon type={iconType} done={isDone} />
          </Link>
        ) : (
          <WorldMapIcon type={iconType} done={isDone} />
        )}
      </div>
    </article>
  );
}
