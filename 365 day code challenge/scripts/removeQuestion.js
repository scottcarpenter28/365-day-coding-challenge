$(document).ready(function() {
  $("#output").click(function() {
    $('#after').text($('#str').val().replace(/\?/g,''));
  });
});
