import "../../../../css/student/storyIntro/storyIntro.css";

// ========================================================================
export default function StoryIntro() {
  return (
    <div className="storyIntro">
      <div className="storyIntroElement fadeOutAnime welcome">
        Welcome to
        <img src="/assets/img/logo.svg" alt="Free Thinker" />
      </div>
      <div className="storyIntroElement fadeInAnime">AD 2280</div>
      <div className="storyIntroElement fadeInAnime">
        Climate change hit the world
      </div>
      <div className="storyIntroElement fadeInAnime">Many cities were lost</div>
      <div className="storyIntroElement fadeInAnime">Your mission is...</div>
      <div className="storyIntroElement fadeInAnime fadeInAnimeSlower">
        <div>Find the lost cities</div>
        <div>and...</div>
        <div>Monsters!!</div>
        <div className="story-monsters-img">
          <img
            src="/assets/img/css/intro-story/introstory-monsters.jpg"
            alt="monsters"
          />
        </div>
      </div>
    </div>
  );
}
