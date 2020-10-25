$(document).ready(function() {
  $("#output").click(function() {
    var num = Math.abs($('#num').val());
    var n=0;
    while(n*(n+1)<num)
      n++;
      console.log(n*(n+1))
    if(n*(n+1)==num)
      $('#ans').text('True');
    else
      $('#ans').text("False");
  });
});
