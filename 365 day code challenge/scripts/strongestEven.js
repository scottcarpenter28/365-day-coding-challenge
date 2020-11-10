$(document).ready(function() {
  $("#output").click(function() {
    var num1 =firstOdd(parseInt($('#num1').val()));
    var num2 =firstOdd(parseInt($('#num2').val()));
    $('#ans').text(num1>num2? $('#num1').val()+" took "+num1+' divisions': $('#num2').val()+" took "+num2+' divisions')
  });
});

function firstOdd(num){
  return num%2==1?0:firstOdd(num/2)+1;
}
