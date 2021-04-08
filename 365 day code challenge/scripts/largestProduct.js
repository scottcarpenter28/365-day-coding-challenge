$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let max = -1;
    let nums = $('#nums').val()
      .split(', ')
      .map(n => parseInt(n));

    for(var i = 1; i < nums.length; i++){
      if(nums[i] * nums[i-1] > max)
        max = nums[i] * nums[i-1];
    }

    $('#ans').text(max);
  });
});
