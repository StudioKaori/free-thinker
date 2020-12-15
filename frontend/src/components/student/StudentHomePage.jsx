import { useEffect, useState } from "react";
import moment from "moment";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

import StoryIntro from "./home/storyIntro/StoryIntro";
import WorldMap from "./worldmap/WorldMap";
import Map from "./home/map/Map";

import AssignmentProgressApi from "../../api/AssignmentProgressApi";

import "../../css/student/student-home.css";

// ========================================================================
// Student Home page - Entry point
export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);
  const [date] = useState(moment().format("yyyy-MM-DD"));
  const [progress, setProgress] = useState([])
  const [showMapToday, setShowMapToday] = useState(false);

  useEffect(() => {
    AssignmentProgressApi.getAllAssignmentProgresss()
        .then((res) => {
            setProgress(res.data);
        })
  }, [])

  // Get info if student finish todays assignments
  useEffect(() => {
    const todayProgress = progress
        .filter(prog => prog.classDailySetting.date.substr(0, 10) === date);

    // If today's date exist, it means all assignment are done by at least one student
    if (todayProgress.length > 0) {
        // List of those students (id)
        const studentsWhoAreDone = todayProgress
            .map(prog => prog.student.id);

        if (studentsWhoAreDone.includes(user[0].id)) { // If logged student is on the list
            setShowMapToday(true);
        }
    }
  }, [progress])

  return (
    <div>
      <Map />

      { showMapToday &&
       <WorldMap /> 
      }

      <div id="popupWindow" className="popupWindow hidePopup">
        <div className="popup_inner popup_inner_L story-inner-box animate__animated animate__rubberBand">
          <StoryIntro key="storyIntro" />
        </div>
      </div>
    </div>
  );
}
