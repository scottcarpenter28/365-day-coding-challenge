$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val().split(', ').filter(w => (/[a-z]*[0-9]+[a-z]*/gi).test(w));
    $('#ans').text(str);
  });
});
