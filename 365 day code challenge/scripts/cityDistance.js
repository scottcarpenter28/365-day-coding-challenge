$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var start = $('#start').val().split(', ').map(n => parseInt(n))
    var end = $('#end').val().split(', ').map(n => parseInt(n))
    var distance = Math.abs(start[0]-end[0])+Math.abs(start[1]-end[1]);
    $('#ans').text(distance);
  });
});
