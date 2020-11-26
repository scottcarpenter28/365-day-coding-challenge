$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums=$('#str').val().split(', ').map(n=>parseInt(n));
    nums=leftShift(nums);

    for(var i=0;i<nums.length;i++){
      if(nums[i]==nums[i+1] &&nums[i]!==0){
        nums[i]=nums[i]*2;
        nums[i+1]=0;
        i++;
      }
    }

    nums=leftShift(nums);
    $('#ans').text(nums.join(', '))
  });
});

function leftShift(nums){
  var ret=[];
  nums.map(n=>n!==0?ret.push(n):'')
  while(ret.length<nums.length)
    ret.push(0);
  return ret;
}
