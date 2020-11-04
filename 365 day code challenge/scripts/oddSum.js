$(document).ready(function() {
  $("#output").click(function() {
    var evenSum = 0;
    var oddSum = 0;
    $('#nums').val().split(' ').map(n => (parseInt(n)%2==0)?evenSum+=parseInt(n):oddSum+=parseInt(n));
    $('#ans').text('Even: '+evenSum+' Odd: '+oddSum);
  });
});
