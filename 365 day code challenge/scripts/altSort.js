$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $('#arr').val();
    arr = JSON.parse(arr)['arr'];

    let nums = arr.filter(n => typeof n =="number").sort();
    let chars = arr.filter(c => typeof c =="string").sort();

    let result = [];
    while(nums.length > 0 && chars.length > 0){
      result.push(nums.shift());
      result.push(chars.shift());
    }
    $('#ans').text(result);
  });
});
