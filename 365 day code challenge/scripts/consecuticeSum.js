$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val()
      .split(", ")
      .map(n => parseInt(n));
    $('#ans').text(sum(nums));
  });
});

function sum(nums){
  var sums = [nums[0]];
  for(var i = 1; i < nums.length; i++){
    if(nums[i] == nums[i-1])
      sums[sums.length-1] += nums[i]
    else
      sums.push(nums[i])
  }
  return sums;
}
