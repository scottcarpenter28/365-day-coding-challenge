$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday','Friday', 'Saturday'];
      var n = parseInt($("#n").val());
      var day = parseInt($('#day').val());
      $('#ans').text(days[(n+day)%7]);
  });
});
