$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let start = parseFloat($('#start').val());
    let mult = parseFloat($('#mult').val());

    if(start > 0 && mult > 0)
      $('#ans').text(calcMonths(start,mult,0));
    else
      $('#ans').text("Start and Multiplier must be a non zero positive number.");
  });
});

function calcMonths(curPay,mult,savings){
  savings += curPay;
  curPay *= mult;

  if(savings >= Math.pow(10,7))
    return 1;
  return 1 + calcMonths(curPay, mult, savings);
}
