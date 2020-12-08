$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var sum=0;
      var nums = $('#num').val().split(', ').map(n =>parseInt(n));
      nums.slice(0, nums.indexOf(0)).map(n => sum+=n);
      $('#ans').text(sum);
  });
});
