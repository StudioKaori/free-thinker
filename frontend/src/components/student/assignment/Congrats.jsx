import Heart from "../../common/Heart";
import "../../../css/student/worldmap/congrats.css";

export default function Congrats() {
  const monsterImg = "/assets/img/monsters/free.png";

  return (
    <div id="congrats-today" className="congrats-wrapper">
      <div className="heart-wrapper">
        <Heart />
      </div>
      <div className="congrats-monster">
        <h3>
          Congratulations! <br />
          You found the monster of today!
        </h3>
        <div className="animate__animated animate__rubberBand">
          <img src={monsterImg} alt="moster" />
        </div>
      </div>
    </div>
  );
}
