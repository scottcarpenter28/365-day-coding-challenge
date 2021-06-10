$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val();
    $('#ans').text(groupLetters(str));
  });
});

function groupLetters(str){
  var result = []
  for(var i = 0; i<str.length-2; i++){
    let temp = ""
    for(var k=0;k<3 && str.length;k++){
      temp += str.charAt(i+k);
    }
    result.push(temp);
  }
  return result.sort();
}
