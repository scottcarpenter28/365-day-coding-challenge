$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num1 = $('#num1').val().split('').map(n => Math.abs(parseInt(n)));
    var num2 = $('#num2').val().split('').map(n => Math.abs(parseInt(n)));


    num1 = lengthTest(num1, num2);
    num2 = lengthTest(num2, num1);


    for (var i = 0; i < num2.length; i++)
      num1[i] > num2[i] ? num2[i] = num1[i] : num2[i] = num2[i];

    $('#ans').text(num2.join(''));
  });
});

function lengthTest(num1, num2) {
  while (num1.length < num2.length) num1.unshift(0);
  return num1
}
