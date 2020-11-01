$(document).ready(function() {
  $("#output").click(function() {
    var num =parseInt($('#num').val());
    var val=0;
    $('#num').val().split('').map(n=>val+=parseInt(n));
    if(val%2==1 && num%2==1 || val%2==0 && num%2==0)
      $('#ans').text('True');
    else
      $('#ans').text('False');
  });
});
