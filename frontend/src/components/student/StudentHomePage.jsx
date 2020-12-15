import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";

// Popup
import showPopupWindow from "../../js/common/popup/showPopupWindow";
import closePopupWindow from "../../js/common/popup/closePopupWindow";

import "../../css/student/student-home.css";

export default function StudentHomePage() {
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
