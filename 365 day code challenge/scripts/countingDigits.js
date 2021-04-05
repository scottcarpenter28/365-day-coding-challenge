$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let filter = parseInt($('#parity').val());

    // Splits each number into a group
    // then maps each number to check with even/odd findletter
    let nums = $('#nums').val()
      .split(', ')
      .map(num =>
        num.split('')
          .map(digit => parseInt(digit))
          .filter(digit => digit % 2 == filter)
          .length
      );
    console.log(nums)
  });
});
