$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var n = parseInt($('#number').val(), 10);
    var f = factorial(n);
    var d =n+"! = "+f+' = ';

    if(decomp(2,f)==1 || decomp(2,f)==undefined)
      d+= '(2)'
    else
      d+='(2^' + decomp(2,f)+')';

    for(var i=3; i<n+1; i+=2){
      if (isPrime(i)){
        var e = decomp(i,f)
        if(e != 1)
          d += '('+i+'^'+e+')';
          else
          d += '('+i+')';
      }
    }

    $('#decomp').text(d);
  });
});


function factorial(num) {
  var n = 1;
  for (var i = 1; i <= num; i++) {
    n *= i;
  }
  return n;
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function decomp(x,f){
  for(var i=0; i<f; i++){
    if(f%Math.pow(x,i)!==0)
            return i-1;
  }
}
