$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var nums = $('#num').val().split(', ').map(n => parseInt(n));
      if(nums.length!=10)
        $('#ans').text('Must be 10 numbers');
      else
        $('#ans').text(createPhoneNumber(nums));
  });
});

function createPhoneNumber(nums){
  var phoneNum ='(';
  for(var i=0; i<nums.length; i++){
    phoneNum+=nums[i];
    if(i==2)
      phoneNum+=')';
    else if(i==5)
      phoneNum+='-';
  }
  return phoneNum;
}
