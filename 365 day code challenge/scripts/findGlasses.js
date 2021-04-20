$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let input = $('#glasses').val();
    input = JSON.parse(input)["input"];
    $('#ans').text(findGlasses(input));
  });
});

function findGlasses(input){
  for(var i = 0; i < input.length; i++){
    if(testMatch(input[i]))
      return i;
  }
  return -1;
}

function testMatch(str){
  let reg = /o-+o/gi;
  let match = str.match(reg);

  if(match == null)
    return false;
  return true;
}
