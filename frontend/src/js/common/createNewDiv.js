export default function createNewDiv(parentId, newId, text) {
  var newElement = document.createElement("div");
  var newContent = document.createTextNode(text);
  newElement.appendChild(newContent);
  newElement.setAttribute("id", newId);
  var parentDiv = document.getElementById(parentId);
  parentDiv.appendChild(newElement);
}
