$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let numA = parseInt($('#numA').val());
    let numB = parseInt($('#numB').val());
    let numC = parseInt($('#numC').val());

    let sum = 0;
    for(var i = numA; i <= numB; i++){
      if(i%numC == 0)
        sum += i;
    }

    $('#ans').text(sum);
  });
});
