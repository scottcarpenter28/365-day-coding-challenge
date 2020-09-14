$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text($('#str').val().split(' ').map(val => val.charAt(0).toUpperCase()+val.substring(1).toLowerCase()).join(''));
  });
});
