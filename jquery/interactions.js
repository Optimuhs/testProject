$(document).ready(function () {
  // Handle color change animations
  curQ = 1;
  $("input").click(function () {
    if (curQ < 5) {
      // Counter for each element
      cur = "#q" + String(curQ);
      span = "#bar" + String(curQ);
      hidden = "#hidden" + String(curQ);
      circle = "#sp" + String(curQ);
      curQ += 1;
      // Hide the question
      $(cur).fadeOut(150, "linear", () => {
        // Update counters
        cur = "#q" + String(curQ);
        circle = "#sp" + String(curQ);
        console.log(cur);
        // Show next question and update tracker
        $(cur).fadeIn(200, "linear");
        $(span).fadeOut(250, "linear", () => {
          $(hidden).fadeIn(250);
          $(circle).css({ "background-color": "#242a41" });
          $(circle).addClass("text-white");
        });
      });
    }
  });
});
