$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(', ')
      .map(n => parseInt(n));
    $('#ans').text(numbersEat(nums));
  });
});


function numbersEat(nums){
  while(nums.length > 1 && nums[0] > nums[1]){
    let cur = nums.shift();
    nums[0] += cur;
  }
  return nums
}
