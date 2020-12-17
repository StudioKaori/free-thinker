import StoryIntro from "./home/storyIntro/StoryIntro";

import StoryIntro from "./home/storyIntro/StoryIntro";

import createNewDiv from "../../js/common/createNewDiv";
import { useState, useEffect } from "react";
import moment from "moment";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

import Map from "./home/map/Map";

import AssignmentProgressApi from "../../api/AssignmentProgressApi";
import ClassDailySettingsApi from "../../api/ClassDailySettingsApi";

import "../../css/student/student-home.css";

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
    if (showIntro) {
      showIntroStory();
    }
  }, [showIntro]);

  const [date] = useState(moment().format("yyyy-MM-DD"));
  const [user] = useRecoilState(userState);

  // Create a default progress entity for each students if not existing yet
  useEffect(() => {
    AssignmentProgressApi.getAllAssignmentProgresss().then((res) => {
      const alreadySetForStudentToday =
        res.data.filter(
          (prog) =>
            prog.classDailySetting.date.substr(0, 10) === date &&
            prog.student.id === user[0].id
        ).length > 0;

      if (!alreadySetForStudentToday) {
        ClassDailySettingsApi.getByDate(date).then((res) => {
          const newObj = {
            assignmentsOfTheDayIsDone: false,
            classDailySetting: { id: res.data.id },
            student: { id: user[0].id }, // student id
          };
          AssignmentProgressApi.createAssignmentProgress(newObj).then(() => {
            console.log("progress created");
          });
        });
      }
    });

    //for animation
    const localDoesShowIntroStory = localStorage.getItem("doesShowIntroStory");
    if (localDoesShowIntroStory === null) {
      setShowIntro(true);
    }
  }, []);

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
