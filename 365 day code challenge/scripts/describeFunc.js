$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num1 = parseInt($('#num1').val());
    let num2 = parseInt($('#num2').val());
    let num3 = parseInt($('#num3').val());
    $('#ans').text(findFunc(num1, num2, num3));
  });
});

function findFunc(num1, num2, num3){
  if(num1 + num2 == num3)
    return "Addition"

  if(num1 - num2 == num3)
    return "Subtraction"

  if(num1 / num2 == num3)
    return "Division"

  if(num1 * num2 == num3)
    return "Multiplication"

  if(num1 ** num2 == num3)
   return "Exponent"

  if(num1 % num2 == num3)
    return "Mod"
  return "Unknown. Possibilities are: Addition, Subtraction, Division, Multiplication, Exponent, Mod."
}
