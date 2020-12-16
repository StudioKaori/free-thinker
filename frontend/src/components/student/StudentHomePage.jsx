import {useState, useEffect} from "react";
import moment from "moment";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";

import AssignmentProgressApi from "../../api/AssignmentProgressApi";
import ClassDailySettingsApi from '../../api/ClassDailySettingsApi';

import "../../css/student/student-home.css";

// ========================================================================
// Student Home page - Entry point
export default function StudentHomePage() {

    const [date] = useState(moment().format("yyyy-MM-DD"));
    const [user] = useRecoilState(userState);

    // Create a default progress entity for each students if not existing yet
    useEffect(() => {
        AssignmentProgressApi.getAllAssignmentProgresss().then((res) => {
            const alreadySetForStudentToday = res.data
                .filter(prog => prog.classDailySetting.date.substr(0,10) === date 
                    && prog.student.id === user[0].id)
                .length > 0;
                
            if (!alreadySetForStudentToday) {
                ClassDailySettingsApi.getByDate(date)
                .then((res) => {
                    const newObj = {
                        assignmentsOfTheDayIsDone: false,
                        classDailySetting: { id: res.data.id },
                        student: { id: user[0].id } // student id
                    }
                    AssignmentProgressApi.createAssignmentProgress(newObj)
                        .then(() => { console.log('progress created')});
                });
            }
        });
    }, [])

  return (
    <div>
      <Map />

      <div id="popupWindow" className="popupWindow hidePopup">
        <div className="popup_inner popup_inner_L story-inner-box animate__animated animate__rubberBand">
          <StoryIntro key="storyIntro" />
        </div>
      </div>
    </div>
  );
}
