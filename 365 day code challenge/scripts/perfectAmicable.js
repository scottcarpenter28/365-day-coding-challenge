$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num<0)
      $('#ans').text("Number must be greater than 0");
    else{
      var firstSum = getSum(num);
      if(firstSum == num)
        $('#ans').text('Perfect')
      else{
        var secSum = getSum(firstSum);
        if(secSum == num)
          $('#ans').text('Amicable');
        else
          $('#ans').text('Niether');
      }
    }
  });
});

function getSum(num){
  var divisors = findDivisors(num);
  return divisors.reduce(divisorSum);
}

function findDivisors(num){
  var divisors =[];
  for(var i=1; i<(num/2)+1; i++){
    if(num%i==0)
      divisors.push(i);
  }
  return divisors;
}

function divisorSum(total, num){
  return total+num;
}
