$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var numA = parseInt($('#numA').val());
    var numB = parseInt($('#numB').val());
    var numC = parseInt($('#numC').val());
    const posibilities = [
          numA * numB * numC,
          numA + numB + numC,
          (numA + numB) * numC,
          numA + numB * numC,
          numA * numB + numC,
          numA * (numB + numC),
        ];

    var max = Math.max.apply(Math, posibilities);
    $('#ans').text(max);
  });
});
