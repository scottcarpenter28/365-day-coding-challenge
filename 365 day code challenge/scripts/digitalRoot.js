$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val())
    $('#ans').text(getRoot(num));
  });
});

function getRoot(num){
  while(num >= 10){
    num = num.toString()
      .split('')
      .map(n => parseInt(n))
      .reduce((acc, cur) => acc + cur);
  }
  return num
}
