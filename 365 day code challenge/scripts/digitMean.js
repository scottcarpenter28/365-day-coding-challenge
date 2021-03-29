$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num = $('#num').val()
      .split('')
      .map(n => parseInt(n));
    let mean = -1;

    let min = Math.min(...num);
    let max = Math.max(...num);
    if(min == max)
      mean = min;
    else{
      let sum = num.reduce((acc, num) => acc+num)
      mean = sum/num.length;
    }

    $('#ans').text(mean);
  });
});
