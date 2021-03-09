$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var height = parseInt($('#height').val());
    var div = Math.floor(height/150);

    var lead = Math.ceil(height/5);
    var mid = div*10;
    var end = (30 * div)/5;

    var time = lead + mid + end;

    $('#ans').text(time);
  });
});
