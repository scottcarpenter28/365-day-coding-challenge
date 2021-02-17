$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var exp = 0;
    $('#ans').text(havingSum(num, exp));
  });
});

function havingSum(num, exp){
  var sum = Math.floor(num/Math.pow(2,exp));
  if(sum <= 1)
    return sum;
  else
    return sum + havingSum(num, exp+1);
}
