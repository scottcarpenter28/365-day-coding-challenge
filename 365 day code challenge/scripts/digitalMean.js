$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#num').val()
      .split('')
      .map(n => parseInt(n));
    let sum = nums.reduce((cur,acc) => cur+acc);
    let mean = sum/nums.length;
    mean = Math.floor(mean);
    $('#ans').text(mean);
  });
});
