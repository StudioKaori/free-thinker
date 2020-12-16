import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";

import "../../css/student/student-home.css";
import { useEffect } from "react";

export default function StudentHomePage() {
  const DoesShowIntroStory = true;

  const showIntroStory = () => {
    setTimeout(hideInnerPopup, 30000);
  };

  const hideInnerPopup = () => {
    document.getElementById("popupStoryWindow").classList.add("hidePopup");
    document
      .getElementById("student-home-schedule-component")
      .classList.add("changeToForward");
  };

  useEffect(() => {
    if (DoesShowIntroStory) showIntroStory();
  }, []);

  return (
    <div>
      <Map />

      <div id="popupStoryWindow" className="popupWindow">
        <div
          id="popupStoryInner"
          className="popup_inner popup_inner_L story-inner-box animate__animated animate__rubberBand"
        >
          <StoryIntro key="storyIntro" />
        </div>
      </div>
    </div>
  );
}
