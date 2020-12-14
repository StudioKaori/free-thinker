import moment from "moment";

export default function WorldMapIslandCard({ island }) {
  const islandImg = "/assets/img/css/islands/" + island.islandTheme + ".png";
  const monsterImg = "/assets/img/monsters/" + island.monster + ".png";
  const isVisible = island.isDone ? "worldmap-visible" : "worldmap-invisible";
  const showCityName = island.isDone ? "worldmap-show" : "worldmap-hide";

  return (
    <article>
      <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
        <img src={monsterImg} className={isVisible} alt="monster" />
      </div>
      <div className="island-name">
        <div className={showCityName}>
          <span>{moment(island.date).format("YYYY/MM/DD")}</span>
          <br />
          {island.city}
        </div>
      </div>
      <div className="island-img">
        <img src={islandImg} className={isVisible} alt="island" />
      </div>
    </article>
  );
}
