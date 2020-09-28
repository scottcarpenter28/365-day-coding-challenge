$(document).ready(function() {
  $("#output").click(function() {
  $('#ans').text($('#nums').val().split('').map(val => Math.pow(parseInt(val),2)).join(''));
  });
});
