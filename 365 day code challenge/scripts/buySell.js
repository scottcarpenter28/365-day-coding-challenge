$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(', ').map(n => parseInt(n));
    var max = nums.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var min = nums.reduce(function(a, b) {
        return Math.min(a, b);
    });

    $('#ans').text(max-min)
  });
});
