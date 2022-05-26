let canvas;
let ctx;

let dragging = false;
let savedImageData;

let strokeColor = "black";
let fillColor = "black";
let line_Width = 2;

let currentTool = "free";
let usingBrush = false;
let canvasWidth = 600;
let canvasHeight = 600;

let brushXPoints = [];
let brushYPoints = [];

// Stores whether mouse is down
let brushDownPos = [];

class MousePoints {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ShapeBox {
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
}

let shapeBox = new ShapeBox(0, 0, 0, 0);

let mousedown = new MousePoints(0, 0);

document.addEventListener("DOMContentLoaded", setupCanvas);
function setupCanvas() {
  canvas = document.getElementById("myCanvas");

  ctx = canvas.getContext("2d");

  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = line_Width;

  canvas.addEventListener("mousedown", ReactToMouseDown);
  canvas.addEventListener("mousemove", ReactToMouseMove);
  canvas.addEventListener("mouseup", ReactToMouseUp);
}

function ChangeTool(tool) {
  document.getElementById("free").className = "";
  document.getElementById("line").className = "";
  document.getElementById("rectangle").className = "";
  document.getElementById("circle").className = "";
  document.getElementById("eraser").className = "";

  document.getElementById(tool).className = "selected";

  currentTool = tool;
}

function UpdateRubberbandSizeData(loc) {
  shapeBox.width = Math.abs(loc.x - mousedown.x);
  shapeBox.height = Math.abs(loc.y - mousedown.y);

  if (loc.x > mousedown.x) {
    shapeBox.left = mousedown.x;
  } else {
    shapeBox.left = loc.x;
  }

  if (loc.y > mousedown.y) {
    shapeBox.top = mousedown.y;
  } else {
    shapeBox.top = loc.y;
  }
}

function drawRubberbandShpae(loc) {
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = fillColor;

  if (currentTool === "free") {
    DrawFree();
  } else if (currentTool === "line") {
    ctx.beginPath();
    ctx.moveTo(mousedown.x, mousedown.y);
    ctx.lineTo(loc.x, loc.y);
    ctx.stroke();
  } else if (currentTool === "rectangle") {
    ctx.beginPath();
    ctx.rect(shapeBox.left, shapeBox.top, shapeBox.width, shapeBox.height);
    ctx.fill();
    ctx.stroke();
  } else if (currentTool === "circle") {
    let radius = shapeBox.width;
    ctx.beginPath();
    ctx.arc(mousedown.x, mousedown.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

function SaveCanvasImage() {
  savedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}
function RedrawImage() {
  ctx.putImageData(savedImageData, 0, 0);
}

function UpdateRubberbandOnMove(loc) {
  UpdateRubberbandSizeData(loc);
  drawRubberbandShpae(loc);
}

function MousePosition(x, y) {
  let canvasSizeData = canvas.getBoundingClientRect();

  return {
    x: (x - canvasSizeData.left) * (canvas.width / canvasSizeData.width),
    y: (y - canvasSizeData.top) * (canvas.height / canvasSizeData.height),
  };
}

function AddBrushPoints(x, y, mousedown) {
  brushXPoints.push(x);
  brushYPoints.push(y);

  brushDownPos.push(mousedown);
}

function DrawFree() {
  for (let i = 0; i < brushXPoints.length; i++) {
    ctx.beginPath();

    if (brushDownPos[i]) {
      ctx.moveTo(brushXPoints[i - 1], brushYPoints[i - 1]);
    } else {
      ctx.moveTo(brushXPoints[i] - 1, brushYPoints[i]);
    }

    ctx.lineTo(brushXPoints[i], brushYPoints[i]);
    ctx.closePath();
    ctx.stroke();
  }
}

function ReactToMouseDown(e) {
  canvas.style.cursor = "crosshair";

  loc = MousePosition(e.clientX, e.clientY);

  SaveCanvasImage();

  mousedown.x = loc.x;
  mousedown.y = loc.y;

  dragging = true;

  if (currentTool === "free") {
    usingBrush = true;
    AddBrushPoints(loc.x, loc.y);
  }
}

function ReactToMouseMove(e) {
  canvas.style.cursor = "crosshair";
  loc = MousePosition(e.clientX, e.clientY);

  if (currentTool === "free" && dragging && usingBrush) {
    if (loc.x > 0 && loc.x < canvasWidth && loc.y > 0 && loc.y < canvasHeight) {
      AddBrushPoints(loc.x, loc.y, true);
    }
    RedrawImage();
    DrawFree();
  } else {
    if (dragging) {
      RedrawImage();
      UpdateRubberbandOnMove(loc);
    }
  }
}

function ReactToMouseUp(e) {
  canvas.style.cursor = "crosshair";
  loc = MousePosition(e.clientX, e.clientY);
  RedrawImage();
  UpdateRubberbandOnMove(loc);
  dragging = false;
  usingBrush = false;
}

// Change Fill Color
fillColorr.addEventListener("change", fillColorChange);
function fillColorChange(e) {
  fillColor = e.target.value;
}

strokeColorr.addEventListener("change", strokeColorChange);
function strokeColorChange(e) {
  strokeColor = e.target.value;
}

eraser.addEventListener("click", () => {
  brushXPoints = [];
  brushYPoints = [];
  brushDownPos = [];
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});
