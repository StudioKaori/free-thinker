export default function showPopupWindow() {
  const popupWindow = document.getElementById("popupWindow");
  popupWindow.classList.remove("hidePopup");
  popupWindow.classList.add("showPopup");
}
