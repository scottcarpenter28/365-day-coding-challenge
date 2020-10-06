$(document).ready(function() {
  $("#output").click(function() {
    var nums = $("#nums").val().split(', ').map(val => parseInt(val)).sort(function(a, b) {
      return a - b
    });
    var i = nums[0];
    var k = 0;

    while (nums[k] == i && i < nums.length) {
      k++;
      i++;
    }
    $('#ans').text('Min: '+nums[0]+' Max: '+nums[nums.length-1]+' Missing min: '+i);
  });
});
