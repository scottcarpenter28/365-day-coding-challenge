$(document).ready(function() {
  $("#output").click(function() {
    $('#after').text($('#str').val().toLowerCase().replace(/[^\w\s]/gi, '').split('').map(toLocation).join(' '));
  });
});

function toLocation(c){
  if(c===' ')
    return '|';
  else
    return c.charCodeAt(0)-96;
}
