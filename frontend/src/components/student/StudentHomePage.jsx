import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";
import createNewDiv from "../../js/common/createNewDiv";

import "../../css/student/student-home.css";
import { useEffect } from "react";

export default function StudentHomePage() {
  const showIntroStory = () => {
    // setTimeout(hideInnerPopup, 30000);
    setTimeout(hideInnerPopup, 3000);
  };

  const hideInnerPopup = () => {
    document.getElementById("popupStoryInner").classList.add("hidePopup");
    document
      .getElementById("student-home-schedule-wrapper1")
      .classList.add("changeToForward");

    document
      .getElementById("student-home-schedule1")
      .classList.add("changeToForward");

    // Add desc
    createNewDiv(
      "student-home-schedule1",
      "schedule-desc",
      "First, have lectures to know this world better!"
    );

    setTimeout(showIslandDescription, 3000);
  };

  const showIslandDescription = () => {
    document.getElementById("schedule-desc").remove();

    document
      .getElementById("student-home-schedule-wrapper1")
      .classList.remove("changeToForward");

    document
      .getElementById("student-home-schedule1")
      .classList.remove("changeToForward");

    document.getElementById("map-island").classList.add("changeToForward");

    // Add desc
    createNewDiv(
      "map-island",
      "islandDesc",
      "Let's look for the monsters from here!"
    );

    setTimeout(deleteDescription, 3000);
  };

  const deleteDescription = () => {
    document.getElementById("islandDesc").remove();
    document.getElementById("map-island").classList.remove("changeToForward");
    document.getElementById("popupStoryWindow").classList.add("hidePopup");
  };

  useEffect(() => {
    var localDoesShowIntroStory = localStorage.getItem("doesShowIntroStory");
    console.log("localDoesShowIntroStory", localDoesShowIntroStory);
    if (localDoesShowIntroStory === null) showIntroStory();
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
