import moment from "moment";
import WorldMapIcon from "./WorldMapIcon";

export default function WorldMapIslandCard({ island }) {
  const islandImg = "/assets/img/css/islands/" + island.islandTheme + ".png";
  const monsterImg = "/assets/img/monsters/" + island.monster + ".png";
  const isVisible = island.isDone ? "worldmap-visible" : "worldmap-invisible";
  const showCityName = island.isDone ? "worldmap-show" : "worldmap-hide";
  const iconType =
    moment(island.date).format("YYYY-MM-DD HH:MM") <
    moment().format("YYYY-MM-DD HH:MM")
      ? "unlock"
      : "lock";
  const isDone = island.isDone;

  return (
    <article>
      <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
        <img src={monsterImg} className={isVisible} alt="monster" />
      </div>
      <div className="island-name">
        <span>{moment(island.date).format("YYYY/MM/DD")}</span>
        <br />
        <div className={showCityName}>{island.city}</div>
      </div>
      <div className="island-img animate__animated animate__rubberBand">
        <img src={islandImg} className={isVisible} alt="island" />
      </div>
      <div className="worldmap-icon animate__animated animate__rubberBand">
        <WorldMapIcon type={iconType} done={isDone} />
      </div>
    </article>
  );
}
