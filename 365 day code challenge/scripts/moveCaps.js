$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val().split('');
    $('#ans').text(sortCaps(str));
  });
});

function sortCaps(str){
  let lead = [];
  let end = []
  for(var i=0; i<str.length; i++){
    let tempChar = str[i];
    if(isUpper(tempChar))
      lead.push(tempChar)
    else
      end.push(tempChar);
  }
  lead = lead.concat(end);
  return lead.join('');
}

function isUpper(letter){
  let code = letter.charCodeAt(0);
  if(code >=65 && code <= 90)
    return true;
  return false;
}
