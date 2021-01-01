$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val().split('');
    $('#ans').text(caps(str,0)+', '+caps(str,1));
  });
});

function caps(v,shift){
  var ret='';
  v.forEach(function(c, i){
    ((i+shift)%2==0)? ret+=c.toLowerCase(): ret+=c.toUpperCase();
  });
  return ret;
}
