$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    $('#ans').text(num > 0 ? sequence(num) : "Number must be greater than 0.")
  });
});

function sequence(num) {
  var count = 0;
  while (num.toString() !== reverse(num) && count < 25) {
    num = num + parseInt(reverse(num));
    count++;
  }
  return "Steps: " + count + " Palindrome: " + num;
}

function reverse(str){
  return str.toString().split('').reverse().join('')
}
