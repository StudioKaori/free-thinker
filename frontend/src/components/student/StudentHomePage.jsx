import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";
import createNewDiv from "../../js/common/createNewDiv";

import "../../css/student/student-home.css";
import { useEffect, useState } from "react";

export default function StudentHomePage() {
  // for intro story
  const [showIntro, setShowIntro] = useState(false);

  const showIntroStory = () => {
    setTimeout(hideInnerPopup, 30000);
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

    setTimeout(showIslandDescription, 6000);
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
      "Then, look for the monsters from here!"
    );

    setTimeout(deleteDescription, 6000);
  };

  const deleteDescription = () => {
    document.getElementById("islandDesc").remove();
    document.getElementById("map-island").classList.remove("changeToForward");
    //document.getElementById("popupStoryWindow").classList.add("hidePopup");
    document.getElementById("popupStoryWindow").remove();
    localStorage.setItem("doesShowIntroStory", "showed");
  };

  useEffect(() => {
    //delete it later
    //localStorage.removeItem("doesShowIntroStory");

    const localDoesShowIntroStory = localStorage.getItem("doesShowIntroStory");
    if (localDoesShowIntroStory === null) {
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    if (showIntro) {
      showIntroStory();
    }
  }, [showIntro]);

  return (
    <div>
      <Map />

      {showIntro && (
        <div id="popupStoryWindow" className="popupWindow">
          <div
            id="popupStoryInner"
            className="popup_inner popup_inner_L story-inner-box animate__animated animate__rubberBand"
          >
            <StoryIntro key="storyIntro" />
          </div>
        </div>
      )}
    </div>
  );
}
