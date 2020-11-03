$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#nums').val().split(' ').map(n => parseInt(n));
    while(nums.length>1){
      console.table(nums);
      var temp = nums.pop();
      nums[0]+=temp;
    }
    $("#ans").text(nums[0]);
  });
});
