$(document).ready(function () {
  curQ = 1;
  $("input").click(function () {
    cur = "#q" + String(curQ);
    span = "#bar" + String(curQ);
    hidden = "#hidden" + String(curQ);
    circle = "#sp" + String(curQ);
    curQ += 1;
    $(cur).fadeOut(200, "linear", () => {
      cur = "#q" + String(curQ);
      circle = "#sp" + String(curQ);
      console.log(cur);
      $(cur).fadeIn(300, "linear");
      $(span).fadeOut(400, "linear", () => {
        $(hidden).fadeIn(300);
        $(circle).css({ "background-color": "#242a41" });
        $(circle).addClass(" text-white");
      });
    });
  });
});
