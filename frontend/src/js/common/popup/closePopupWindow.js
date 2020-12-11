export default function closePopupWindow() {
  const popupWindow = document.getElementById("popupWindow");
  popupWindow.classList.remove("showPopup");
  popupWindow.classList.add("hidePopup");
}
