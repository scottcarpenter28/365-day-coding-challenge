$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num = parseInt($("#num").val());

    $('#ans').text(findNearestPalindrome(num));
  });
});

function findNearestPalindrome(num){
  for(var i = 0; i < Number.MAX_SAFE_INTEGER; i++){
    let upper = num + i;
    let lower = num - i;

    if(isPalindrome(lower))
      return lower;
    if(isPalindrome(upper))
      return upper;
  }
  return "Error finding palindrome";
}

function isPalindrome(num){
  let reversedNum = num.toString()
    .split("")
    .reverse()
    .join("");
  return num == parseInt(reversedNum);
}
