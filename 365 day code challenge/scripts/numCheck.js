$(document).ready(function() {
  $("#eq").click(function() {
    var num = parseInt($('#num').val());
    var ans = '';

    if(num==1 || num==2)ans += " Is prime.";
    else
      ans +=checkPrime(num);

    if(num%2 == 0) ans += " Is even";
    if(num%10 == 0) ans += " Is a multiple of 10.";

    if(ans=='')ans=' Is not prime, even or multiple of 10';

    $('#ans').text(num+ans);
    });
});

function checkPrime(num){
  for(var i=3; i<num; i++){
    if(num%i ==0) return ''
  }
  return ' Is prime';
}
