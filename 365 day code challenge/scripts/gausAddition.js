$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var num2 = parseInt($('#num2').val());
    if(num == NaN && num2 == NaN)
      $('#ans').text('At least one number is required');
    else{
      console.log(`${num} ${num2}`);

      var ans;
      if(num != NaN)
        ans = gaus(num);
      else if(num2 != NaN )
        ans = gaus(num2)
      if(num != NaN && num2 != NaN && num > num2)
        ans = rangeGaus(num2,num);

      else if(num != NaN && num2 != NaN && num < num2)
        ans = rangeGaus(num,num2);

      $('#ans').text(ans);
    }
  });
});

function gaus(n){
  return .5*n*(n+1);
}

function rangeGaus(a,b){
  var sum = a+b;
  sum *= b-a+1;
  sum = sum/2;
  return sum;
}
