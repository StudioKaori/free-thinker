export default function Congrats({ monster }) {
  const monsterImg = "/assets/img/monsters/" + monster + ".png";

  return (
    <div className="popupWindow">
      <img src={monsterImg} alt="moster" />
    </div>
  );
}
