
var developerWindow = document.createElement("div");
developerWindow.innerHTML = `
<!-- Draggable DIV -->
<div id="mydiv">
  <!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->
  <div id="mydivheader">Click here to move</div>
  <p>Move</p>
  <p>this</p>
  <p>DIV</p>
  </div>`;
document.body.appendChild(developerWindow);