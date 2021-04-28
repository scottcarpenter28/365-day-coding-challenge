$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(", ")
      .map(n => parseFloat(n));

    $('#ans').text(getBalance(nums));
  });
});

function getBalance(nums){
  let half1 = nums.slice(0, nums.length/2);
  let sum1 = getSum(half1);
  let half2 = nums.slice(nums.length/2);
  let sum2 = getSum(half2);

  if(sum1 > sum2)
    return half1.concat(half1);
  else if(sum2 > sum1)
    return half2.concat(half2);
  return nums;
}

function getSum(arr){
  return arr.reduce((acc,cur)=> acc+cur);
}
