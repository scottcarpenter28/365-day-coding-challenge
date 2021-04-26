$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let exp = $('#exp').val();
    let max = parseInt($('#max').val());
    $('#ans').text(getSum(exp,max));
  });
});

function getSum(exp,max){
  let sum = 0;
  for(var i = 1; i <= max; i++)
    sum += eval(exp.replaceAll('n',i));
  return sum.toFixed(2);
}
