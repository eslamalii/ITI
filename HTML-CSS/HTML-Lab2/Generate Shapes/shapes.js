line.addEventListener("click", () => {
  var newpath = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newpath.setAttribute("x1", "300");
  newpath.setAttribute("y1", "300");
  newpath.setAttribute("x2", "200");
  newpath.setAttribute("y2", "200");
  newpath.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
  mySVG.append(newpath);
});

rectangle.addEventListener("click", () => {
  var newpath = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  newpath.setAttribute("x", "100");
  newpath.setAttribute("y", "50");
  newpath.setAttribute("width", "200");
  newpath.setAttribute("height", "100");
  newpath.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
  mySVG.append(newpath);
});

circle.addEventListener("click", () => {
  var newpath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  newpath.setAttribute("cx", "50");
  newpath.setAttribute("cy", "300");
  newpath.setAttribute("r", "50");
  newpath.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
  mySVG.append(newpath);
});
