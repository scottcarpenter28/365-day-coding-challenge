$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var unluckDaysCount = 0;
    var year = $('#year').val();
    for (var m = 1; m <= 12; m++) {
      var d = new Date(year, m, 13);
      if (d.getDay() == 5)
        unluckDaysCount++;
    }
    $('#days').text(unluckDaysCount);
  });
});
