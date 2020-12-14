import "../../../css/student/worldmap.css";

export default function WorldMap() {
  return (
    <div className="worldMap">
      <div className="worldMap-img">
        <img
          src="/assets/img/css/worldmap/world-map-with-path.png"
          alt="world map"
        />

        <div className="worldMap-island">
          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img src="/assets/img/monsters/kurage.png" alt="monster" />
            </div>
            <div className="island-name">Stockholm</div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                alt="island"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
