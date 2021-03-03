$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    $('#ans').text(fixCase(str));
  });
});

function fixCase(str){
  var upper = str.match(/[A-Z]/g);
  var lower = str.match(/[a-z]/g);
  if(upper.length > lower.length)
    return str.toUpperCase();
  else
    return str.toLowerCase();
}
