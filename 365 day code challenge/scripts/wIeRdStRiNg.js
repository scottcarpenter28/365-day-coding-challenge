$(document).ready(function() {
  $("#output").click(function() {
      $('#weird').text($('#str').val().split('').map(weird).join(''));
    });
});

function weird(c, i){
  if(i%2==0 || i==0)
    return c.toUpperCase();
  else
    return c.toLowerCase();
}
