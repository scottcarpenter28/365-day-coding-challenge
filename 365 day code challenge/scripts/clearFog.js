$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text($('#str').val().replace(/[fog]/gi,''));
  });
});
