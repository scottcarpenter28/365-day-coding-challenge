$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(', ').map(n => parseInt(n));
    $('#ans').text(smallerThan(nums));
  });
});

function smallerThan(nums){
  for(var i = 0; i < nums.length; i++){
    var lower = 0;
    for(var k = i+1; k < nums.length; k++){
        if(nums[i] > nums[k])
          lower++;
    }
    nums[i] = lower;
  }
  return nums;
}
