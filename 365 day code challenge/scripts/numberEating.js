$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#numbers').val().split(' ').map(n => parseInt(n));
    var sum = nums.shift();

    while (nums.length > 1 || sum > nums[0])
      sum += nums.shift();

    $('#ans').text(nums.length == 0 ? sum : sum + '<' + nums.pop());
  });
});
