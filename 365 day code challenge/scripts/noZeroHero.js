$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      $('#ans').text($('#num').val().replace(/0+$/g, ''));
  });
});
