$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val();
    $('#ans').text(getSum(nums));
  });
});

function getSum(nums){
  if(nums.length == 1)
    return parseInt(nums);
  return parseInt(nums.charAt(0)) + getSum(nums.substr(1));
}
