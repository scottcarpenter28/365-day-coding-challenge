$(document).ready(function() {
  $("#output").click(function() {
    var letter = 0;
    $('#str').val().split('').map(l => letter += l.toLowerCase().charCodeAt(0)-96);
    $('#ans').text(String.fromCharCode((letter % 26) + 96));
  });
});
