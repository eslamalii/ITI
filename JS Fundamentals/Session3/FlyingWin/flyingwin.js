var x = 0,
  y = 0,
  w = 200,
  h = 200;

var dx = 5,
  dy = 5;

var interval = 100;

function flyWindow() {
  var win = open("", "", "width=300,height=300");
  win.moveTo(x, y);

  var intervalID = window.setInterval(() => {
    flying();
  }, interval);

  function flying() {
    if (win.closed) {
      clearInterval(intervalID);
      return;
    }

    //  if we have reached the right or left edge.
    if (x + dx > screen.availWidth - w || x + dx < 0) dx = -dx;

    //  if we have reached the bottom or top edge.
    if (y + dy > screen.availHeight - h || y + dy < 0) dy = -dy;

    // Update the current position of the window.
    x += dx;
    y += dy;

    // Finally, move the window to the new position.
    win.moveTo(x, y);
  }
}
