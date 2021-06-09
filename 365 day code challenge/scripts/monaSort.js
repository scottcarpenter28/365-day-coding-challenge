$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(', ')
      .map(n => parseInt(n));
    $('#ans').text(monaSort(nums));
  });
});

function monaSort(nums){
  let swap = 0;
  while(!isSorted(nums)){
    for(var i=1; i<nums.length; i++){
      let first = nums[i-1];
      let second = nums[i];
      if(first>second){
        nums[i-1]=second
        nums[i]=first;
        swap++;
      }
    }
  }
  return swap;
}

function isSorted(nums){
  for(var i=0; i<nums.length-1; i++){
    if(nums[i]>nums[i+1])
      return false
  }
  return true;
}
