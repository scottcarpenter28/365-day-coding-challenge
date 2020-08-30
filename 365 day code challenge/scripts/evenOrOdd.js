$(document).ready(function() {
  $("#output").click(function() {
    var oddNums = 0;
    var evenNums = 0;
    var nums = $('#nums').val().split('');
    for(var i=0; i<nums.length; i++){
      if(parseInt(nums[i])%2==0)
        evenNums++;
      else
        oddNums++;
    }
    if(oddNums>evenNums)
      $('#ans').text('More odd numbers than even.');
    else if(evenNums>oddNums)
      $('#ans').text('More even numbers than odds.')
    else
      $('#ans').text('Its a tie.');
  });
});
