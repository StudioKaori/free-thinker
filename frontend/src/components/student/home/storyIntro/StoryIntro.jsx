import "../../../../css/student/storyIntro/storyIntro.css";

export default function StoryIntro() {
  return (
    <div className="storyIntro">
      <div className="storyIntroElement fadeOut">
        Welcome to
        <img src="/assets/img/logo.svg" alt="Free Thinker" />
      </div>
      <div className="storyIntroElement fadeIn">AD 2280</div>
      <div className="storyIntroElement fadeIn">
        Climate change hit the world
      </div>
      <div className="storyIntroElement fadeIn">Many cities were lost</div>
      <div className="storyIntroElement fadeIn">Your mission is</div>
      <div className="storyIntroElement fadeIn">
        <div>Find the lost cities</div>
        <div>and...</div>
        <div>Hunt the Monsters!!</div>
      </div>
    </div>
  );
}
