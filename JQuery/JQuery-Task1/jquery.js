$("img").mousemove(function (event) {
  $(".image").offset({ left: event.pageX + 10, top: event.pageY + 10 });
  if (event.pageX + 400 > $(window).width()) {
    $("div").offset({
      left: event.pageX - 400,
      top: event.pageY + 10,
    });
  }
});

$("img").mouseenter(function () {
  $(this).clone().appendTo($(".image")).css({
    width: "400px",
    height: "400px",
    position: "absolute",
  });
});

$("img").mouseleave(function () {
  $("div img").remove();
});
