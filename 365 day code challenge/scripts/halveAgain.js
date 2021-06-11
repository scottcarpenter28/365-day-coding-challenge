$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num1 = parseFloat($('#num1').val());
    let num2 = parseFloat($('#num2').val());
    let count = 0;
    while(num1 > num2){
      num1 /=2;
      count+=1;
    }

    $('#ans').text(count-1);
  });
});
