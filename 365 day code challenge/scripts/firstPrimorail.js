$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let n = parseInt($('#n').val());
    $('#ans').text(firstPrimorial(n));
  });
});

function firstPrimorial(n){
  let primes = [];
  if(n <= 0)
    return "Numer must be > 0";
  let i = 2;
  while(i < Number.MAX_SAFE_INTEGER && primes.length < n){
    if(checkForPrime(i))
      primes.push(i);
    i++;
  }

  return primes.reduce(reducePrimes);
}

function checkForPrime(num){
  for(var i = 2; i < num; i++){
    if(num%i == 0)
      return false;
  }
  return true;
}

function reducePrimes(acc, cur){
  if(acc == 0)
    return cur;
  return acc * cur;
}
