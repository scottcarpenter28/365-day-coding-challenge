$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val();
    let stretched = $('#stretchedStr').val();
    $('#ans').text(checkMatch(stretched,str))
  });
});

function checkMatch(stretched, str){
  let reg = new RegExp(str.split('').join('+')+'+');
  let temp = stretched.match(reg);
  if(temp == null)
    return false;
  let count = [...stretched.matchAll(str.charAt(0))]

  let splitReg = new RegExp('.{1,'+count.length+'}','g');
  let splitStr = stretched.match(splitReg);

  for(var i = 0; i < splitStr.length; i++){
    let tempStr = splitStr[i];
    let firstChar = tempStr.charAt(0);
    if(!tempStr.split('').every(c => c==firstChar))
      return false
  }

  return true;
}
