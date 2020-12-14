import "../../../css/student/worldmap.css";
import moment from "moment";

export default function WorldMap() {
  const fakeDB = [
    {
      id: 1,
      date: "2020-12-12",
      isDone: true,
      city: "Stockholm",
      monster: "oni",
    },

    {
      id: 2,
      date: "2020-12-13",
      isDone: true,
      city: "Stockholm",
      monster: "kurage",
    },

    {
      id: 3,
      date: "2020-12-14",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
    },

    {
      id: 4,
      date: "2020-12-15",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
    },

    {
      id: 5,
      date: "2020-12-16",
      isDone: false,
      city: "Stockholm",
      monster: "kurage",
    },
  ];

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
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>

          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>
          <article>
            <div className="island-monster animate__animated animate__pulse animate__infinite	infinite">
              <img
                src="/assets/img/monsters/kurage.png"
                className="worldmap-visible"
                alt="monster"
              />
            </div>
            <div className="island-name">
              <span>{moment().format("YYYY/MM/DD")}</span>
              <br />
              Stockholm
            </div>
            <div className="island-img">
              <img
                src="/assets/img/css/islands/island-green.png"
                className="worldmap-visible"
                alt="island"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
