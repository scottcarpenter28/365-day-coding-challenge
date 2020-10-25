$(document).ready(function() {
  $("#output").click(function() {
    $("#ans").text(Math.abs($('#num').val()).toString().length);
  });
});
