$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var number = parseInt(
      $('#number').val());
    var increment = parseInt(
      $('#increment').val());
    var step = parseInt(
      $('#step').val());

    var ans = number+(increment*step);
    $('#ans').text(ans);

  });
});
