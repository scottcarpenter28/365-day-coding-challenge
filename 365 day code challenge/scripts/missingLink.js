$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(', ')
      .map(n => parseFloat(n));

    let minStep = findMinStep(nums);
    let missing = findMissing(nums, minStep)

    $('#ans').text(missing);
  });
});

function findMinStep(nums){
  let steps = nums.map(mapSteps);
  return Math.min(...steps);
}

function mapSteps(cur, i, arr){
  if(i == arr.length -1)
    return Number.MAX_SAFE_INTEGER;
  return arr[i+1] - cur;
}

function findMissing(nums, step){
  if(step == Number.MAX_SAFE_INTEGER)
    return "No number to step by";

  for(var i = 0; i < nums.length-1; i++){
    let next = nums[i] + step;
    if(next != nums[i+1])
      return next;
  }
  return "No number found."
}
