$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val().split(' ').map(n => parseInt(n));
    let ans = "No operation found";

    // first 2 numbers used for operations
    let num1 = nums[0];
    let num2 = nums[1];

    //Last elements are possible answers
    let possibe = nums.slice(2);

    if(possibe.includes(num1+num2))
      ans = "Addition"
    else if(possibe.includes(num1-num2))
      ans = "Subtraction"
    else if(possibe.includes(num1*num2))
        ans = "Multiplication"
    else if(possibe.includes(num1/num2))
      ans = "Division"

    $('#ans').text(ans)
  });
});
