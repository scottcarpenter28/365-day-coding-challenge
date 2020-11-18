$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#arr').val().split(' ').map(n => parseInt(n));
    var cycle = parseInt($('#cycle').val());
    $('#ans').text(testCycle(nums, cycle));
  });
});

function testCycle(nums, cycle){
  var arr1 = nums.slice(0,cycle);
  var arr2 = nums.slice(cycle);
  for(var i=0; i<arr1.length; i++){
    if(arr1[i]!==arr2[i] && i<arr2.length)
      return false;
  }
  return true;
}
