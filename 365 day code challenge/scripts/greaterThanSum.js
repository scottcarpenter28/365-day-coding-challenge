$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums = $('#nums').val()
      .split(', ')
      .map(n => parseInt(n));

    $('#ans').text(checkGreaterThan(nums))
  });
});

function checkGreaterThan(nums){
  let check = true
  nums.forEach((num, ind, arr) =>{
    let sum = -1;
    let numsBefore = arr.slice(0,0+ind);
    if (numsBefore.length != 0)
      sum = numsBefore.reduce((acc,n)=> acc + n);

    if(sum !=-1){
      if(sum > num)
       check = false;
    }
  });
  return check;
}
