$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    String.prototype.swapCase = changeCase;
    $('#ans').text(str.swapCase());
  });
});

function changeCase(){
  var str = this.split('');
  for(var i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) < 90)
      str[i] = str[i].toLowerCase();
    else
      str[i] = str[i].toUpperCase();
  }
  return str.join('');
}
