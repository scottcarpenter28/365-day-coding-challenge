$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var dis = parseFloat($('#distance').val());
    var timeArr = $('#time').val().split(':');

    var s = (parseFloat(timeArr[1])/60).toFixed(2)
    s = parseFloat(s);
    var m = parseFloat(timeArr[0]);
    var time = m+s;

    var speed = (time/dis).toFixed(2);
    $('#mph').text(speed+'mph');
    });
});
