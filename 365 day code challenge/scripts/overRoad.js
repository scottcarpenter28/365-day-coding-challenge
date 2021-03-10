$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var address = parseInt($('#address').val());
    var length = parseInt($('#length').val())
    var neighbor = length*2-address+1;
    $('#ans').text(neighbor);
  });
});
