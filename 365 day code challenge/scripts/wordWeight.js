$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#str').val().split(' ');
    $("#ans").text(testWeight(arr));
  });
});

function testWeight(arr){
  for(var i=0; i< arr.length; i++){
    arr[i] = getScore(arr[i]);
    if(i > 1 && arr[i] < arr[i-1])
      return false;
  }
  return true;
}

function getScore(str){
  const reg = /[^a-z]/gi;
  str = str.replace(reg,'');
  var score = 0;
  str.split('').map(char => score += char.charCodeAt(0));
  return score;
}
