$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(', ').map(n => parseInt(n));
    var num = parseInt($("#num").val());

    nums.shift();                                //Removes first element. No room to left
    var oddEvenTest = num%2;                     //Tests for odd or even number
    nums = nums.filter(n => n%2 == oddEvenTest); //Removes all numbers that don't match

    $('#ans').text(nums.length);
  });
});
