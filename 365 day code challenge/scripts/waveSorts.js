$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(', ')
      .map(num => parseInt(num))
      .sort();
    let result = [];

    while(nums.length >= 2){
      // Put the end of the list into result
      result.push(nums.pop());
      // Put the start of the list into the result
      if(nums.length > 1)
        result.push(nums.shift());

      // If this is the last number, put it first
      if(nums.length == 1)
        result.unshift(nums.pop())
    }

    $('#ans').text(result.join(", "));
  });
});
