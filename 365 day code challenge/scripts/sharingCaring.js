$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(", ")
      .map(n => parseFloat(n));

    $('#ans').text(getShared(nums));
  });
});

function getShared(nums){
  let min = Math.min(...nums);
  let minIndex = nums.indexOf(min);
  let share = 0;

  for(var i =0; i < nums.length; i++){
    if(nums[i] == min)
      continue;
    let toShare = nums[i] * .25;
    nums[i] -= toShare.toFixed(1);
    share += toShare;
  }
  nums[minIndex] += share;
  return nums
}
