import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";

// Popup
import showPopupWindow from "../../js/common/popup/showPopupWindow";
import closePopupWindow from "../../js/common/popup/closePopupWindow";

import "../../css/student/student-home.css";

export default function StudentHomePage() {
  // To get user information, just use user below
  const [user] = useRecoilState(userState);

  return (
    <div>
      <Map />

      <div id="popupWindow" className="popupWindow hidePopup">
        <div className="popup_inner popup_inner_L story-inner-box">
          <StoryIntro key="storyIntro" />
        </div>
      </div>
    </div>
  );
}
