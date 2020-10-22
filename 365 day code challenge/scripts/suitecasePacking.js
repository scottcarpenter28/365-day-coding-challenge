$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#nums').val().split(' ').map(item => Math.abs(parseInt(item)));
    if(nums.length<=3 || nums.length>=5)
      $('#ans').text("Must be 4 numbers");
    else if(nums[0]<nums[2] && nums[1]<=nums[3])
      $('#ans').text('True');
    else
      $('#ans').text('False');
  });
});
