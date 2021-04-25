$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let numA = parseFloat($('#numA').val());
    let numB = parseFloat($('#numB').val());
    $('#ans').text(simpleCount(numA,numB));
  });
});

function simpleCount(a, b){
  if(a==0 || b==0)
    return 0;
  let check = simpleCheck(a,b)
  if(b > a)
    check = simpleCheck(b,a)
  return check + simpleCount(a-1,b-1);
}

function simpleCheck(div, by){
  if(Number.isInteger(div/by))
    return 1;
  return 0;
}
