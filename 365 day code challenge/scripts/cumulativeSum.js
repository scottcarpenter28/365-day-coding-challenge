import {toIntArr} from './_generalFunctions';

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var numbers = $('#numbers').val().split(', ').map(n => parseInt(n));
    for(var i = 1; i < numbers.length; i++)
      numbers[i] = numbers[i-1] + numbers[i];
    $('#ans').text(numbers.toString());
  });
});
