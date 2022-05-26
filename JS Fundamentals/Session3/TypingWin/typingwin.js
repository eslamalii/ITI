var str = "What do you call an alligator detective? An investi-gator";
var i = 0;
function openWindow() {
  var myWindow = open("", "", "width=500,height=300");

  (function typing() {
    if (i < str.length) {
      myWindow.document.write(str[i]);
      i++;
      myWindow.setTimeout(typing, 100);
    }
  })();
}
