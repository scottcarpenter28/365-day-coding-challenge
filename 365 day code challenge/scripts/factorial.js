var f;
var d = '';
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    f = factorial($('#number').val());
    d = f+' = ';
    decomp();
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

function decomp() {
  var subF = f;
console.log(f);
  for (var i = 2; subF>=1; i++){
    //Checks for prime
    if (isPrime(i)) {
      var c = 1;
      for(var e=1; e<subF; e++){
        if( Math.pow(i,e)>subF || (subF*Math.pow(i,e)%1)!==0){
          subF -= Math.pow(i,e-1);
          console.log(subF);
          e=subF;
        }
        else
          c=e;
      }
      if (c==1) {
        d += "(" + i+ ")"
      }
      else{
        d += "(" + i + "^" + c + ")"
      }

    }
  }


}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
