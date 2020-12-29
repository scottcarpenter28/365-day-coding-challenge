$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var nums = $('#nums').val().split(', ');
      for(var i =0; i < nums.length; i++)
        nums.indexOf(nums[i])!==nums.lastIndexOf(nums[i])? nums = nums.filter(n => n!=nums[i]):'';
      $('#ans').text(nums);
  });
});
