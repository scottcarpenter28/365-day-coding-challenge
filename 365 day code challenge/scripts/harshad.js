$(document).ready(function() {
  $("#output").click(function() {
    var divisible = 0;
    var num =$('#num').val().split('').map(n => divisible+=parseInt(n));
    var h =parseInt($('#num').val());
    if(h%divisible==0)
      $('#ans').text('True');
    else
      $('#ans').text('False');
  });
});
