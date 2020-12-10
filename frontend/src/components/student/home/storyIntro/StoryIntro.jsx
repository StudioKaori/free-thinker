import "../../../../css/student/storyIntro/storyIntro.css";

export default function StoryIntro() {
  return (
    <div>
      <div className="storyIntroElement fadeIn delay1">
        This is the story of parallel world...
      </div>
      <div className="storyIntroElement fadeIn delay2">AD 2080</div>
      <div className="storyIntroElement fadeIn delay3">
        Climate change hit the world
      </div>
      <div className="storyIntroElement fadeIn delay4">
        Many cities were lost
      </div>
      <div className="storyIntroElement fadeIn delay5">Your mission is</div>
      <div className="storyIntroElement storyIntroLast">
        <span class="animate__animated animate__bounce  animate__delay-3s">
          Find the lost cities
        </span>
        <span>and...</span>
        <span>Hunt the Monsters!!</span>
      </div>
    </div>
  );
}
