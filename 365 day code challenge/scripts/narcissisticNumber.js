$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num = $('#num').val();
    let nar = num.split('')
      .map(n =>parseInt(n));
    let sum = 0
    nar.forEach(n=>{
      sum += n**nar.length;
    })
    num = parseInt(num)

    $('#ans').text(num == sum? "Narcissistic":"Not Narcissistic");
  });
});
