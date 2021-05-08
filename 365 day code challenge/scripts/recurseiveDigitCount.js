$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let n = parseInt($('#n').val());
    $('#ans').text(digitLength(n));
  });
});

function digitLength(n){
  if(n < 10)
    return 1;
  return 1 + digitLength(n/10);
}
