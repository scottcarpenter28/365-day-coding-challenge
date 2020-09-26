$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#nums').val().split(' ').map(val => parseInt(val));
    if (nums.length < 2)
      $('#ans').text('Must have more than 2 numbers');
    else {
      var max=nums[0]*nums[1];
      for (var i = 2; i <= nums.length; i++){
        if((nums[i]*nums[i-1])>max)
          max=nums[i]*nums[i-1]
      }
      $('#ans').text(max);
    }

  });
});
