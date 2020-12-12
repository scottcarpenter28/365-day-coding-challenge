$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text($('#str').val().split(' ').map( w => w.charAt(0).toUpperCase()+w.substr(1,w.length-2)+w.charAt(w.length-1).toUpperCase()).join(' '));
  });
});
