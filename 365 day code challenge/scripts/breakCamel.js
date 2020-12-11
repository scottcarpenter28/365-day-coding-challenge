$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      $('#ans').text($('#str').val().split(/(?=[A-Z])/g).join(' ').toLowerCase())
  });
});
