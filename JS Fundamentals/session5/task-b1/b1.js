var input = document.getElementById("input");
var result = document.getElementById("result");

input.addEventListener("keyup", (event) => {
  event.key === "Alt"
    ? (result.innerText = "Alt was pressed")
    : event.key === "Shift"
    ? (result.innerText = "Shift was pressed")
    : event.key === "Control"
    ? (result.innerText = "Control was pressed")
    : (result.innerText = `${event.key} was pressed and its key-code : ${event.which}`);
});

// Disable browser right-click for the whole page
window.addEventListener("contextmenu", (e) => e.preventDefault());
