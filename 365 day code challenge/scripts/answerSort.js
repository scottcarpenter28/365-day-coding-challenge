$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let expressions = $('#expressions').val()
      .split(', ')
      .sort(byAns);
    console.table(expressions)
  });
});

function byAns(expA, expB){
  let sumA = eval(expA);
  let sumB = eval(expB);

  if(sumA > sumB)
    return 1;
  if(sumA == sumB)
    return 1;
  return -1;
}
