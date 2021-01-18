$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(', ').map(n => parseInt(n));
    $('#ans').text(nums.length >= 3 ? boomerang(nums) : "Must have at least three numbers.")
  });
});

function boomerang(nums) {
  var res = '';
  var boom =0
  for(var i=2; i<nums.length;i++){
    if(nums[i]==nums[i-2] && (nums[i]<nums[i-1]|| nums[i]>nums[i-1])){
      res+='['+nums.slice(i-2,i+1).toString()+'] ';
      boom++;
    }
  }
  return boom+' Boomerangs->'+res;
}
