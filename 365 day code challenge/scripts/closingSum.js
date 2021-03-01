$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = $('#num').val().split("");
    $('#ans').text(sum(num));
  });
});

function sum(num){
  if(num.length <= 2){
    if(num.length == 1)
      return parseInt(num.pop())
    else
      return popShiftInt(num);
  }
  else
    return popShiftInt(num) + sum(num);
}

function popShiftInt(num){
  return parseInt(num.shift()+num.pop());
}
