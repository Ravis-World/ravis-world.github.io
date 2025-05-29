$(function() {
  let added = {};

  $(".ingredient").on("dragstart", function(ev) {
    ev.originalEvent.dataTransfer.setData("text", ev.target.id);
  });

  $("#chamber").on("dragover", function(ev) {
    ev.preventDefault();
  });

  $("#chamber").on("drop", function(ev) {
    ev.preventDefault();
    const id = ev.originalEvent.dataTransfer.getData("text");
    if (!added[id]) {
      const item = $("#" + id).clone().removeAttr("draggable");
      $(this).append("<div>" + item.text() + "</div>");
      added[id] = true;
    }

    if (added.silver && added.brain && added.water) {
      $("#nextButton").show();
    }
  });
    $("#nextButton").on("click", function() {
        window.location.href = "Door 93/index.html";
    });
});