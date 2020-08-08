$(document).ready(function() {
  $("#output").click(function() {
    var weight = parseFloat($('#weight').val());
    var height = parseFloat($('#height').val());
    var bmi = Math.floor((703*weight)/Math.pow(height,2));
    $('#bmi').text(bmi);
  });
});
