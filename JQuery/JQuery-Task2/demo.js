$("a").each((index, element) => {
  element.addEventListener("click", function () {
    $(".info").each((i, e) => {
      e.style.maxHeight = 0;
    });
    let info = $(this).next();
    if (info.height() === 0) {
      info.css({ maxHeight: "100px" });
    } else {
      info.css({ maxHeight: "0px" });
    }
  });
});
