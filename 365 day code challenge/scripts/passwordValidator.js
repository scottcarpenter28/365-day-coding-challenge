$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var reg = /[\W_]+/gi
    var str = $('#str').val();
    $('#ans').text(!reg.test(str)? "Valid": "Invalid")
  });
});
