$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    $('#ans').text($('#str').val().replaceAll((/t/gi), 'U'));
  });
});
