import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import Map from "./home/map/Map";
import StoryIntro from "./home/storyIntro/StoryIntro";
import WorldMap from "./worldmap/WorldMap";
import Heart from "../common/Heart";

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
      {/* <WorldMap /> */}
      <Heart />

      <div id="popupWindow" className="popupWindow hidePopup">
        <div className="popup_inner popup_inner_L story-inner-box animate__animated animate__rubberBand">
          <StoryIntro key="storyIntro" />
        </div>
      </div>
    </div>
  );
}
