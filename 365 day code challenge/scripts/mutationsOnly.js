$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $("#nums").val().split(', ').map(n => parseInt(n));
    $('#ans').text(mutations(nums));
  });
});

function mutations(nums) {
  var temp = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0)
      temp.push(nums[i]);
  }
  while(temp.length < nums.length)
    temp.push(0);
  return temp;
}
