$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val().toLowerCase();
    $("#ans").text(searchAlpha(str));
  });
});

function searchAlpha(str){
  var alphabet = '0'.repeat(26).split('');
  var reg = /[^a-z]/gi;
  str = str.replace(reg,'');

  while(str.length>0){
    var code = str.charCodeAt(0)-97;
    if(code => 0 && code <= 26)
      alphabet[code] = 1;
    str = str.replaceAll(str.charAt(0),'');
  }

  return alphabet.toString();
}
