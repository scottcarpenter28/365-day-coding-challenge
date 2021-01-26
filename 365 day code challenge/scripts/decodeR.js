$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var fullString = $('#str').val();
    var num = parseInt(fullString.match(/\d/gi).join(''));
    var str = fullString.match(/\D/gi).join('').toLowerCase();
    $('#ans').text(decodeR(str,num));
  });
});

function decodeR(str,num){
  var decodedStr = '';
  for(var i=0;i<str.length;i++){
    var code = str.charCodeAt(i);
    code -= 97;
    code = (code*num);
    code = code%26;
    code += 97;
    decodedStr += String.fromCharCode(code);
  }
  if(decodedStr == str)
    return "Impossible to decode";
  else
    return num+decodedStr;
}
