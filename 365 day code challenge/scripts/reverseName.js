$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    $('#reversed').text($('#name').val().split(' ').reverse().join(' '));
    });
});
