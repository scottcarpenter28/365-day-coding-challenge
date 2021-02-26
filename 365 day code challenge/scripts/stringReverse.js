$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val().split(" ");
    $('#ans').text(specialReverse(str));
  });
});

function specialReverse(str){
  str = str.map( wrd => wrd.split('')
                .reverse()
                .join(''))
            .reverse()
            .join(' ');
  var ret = ''
  for(var i = 0; i < str.length; i++){
    var code = str.charCodeAt(str.length-1-i);
    if(code >=65 && code <=90)
      ret += str.charAt(i).toUpperCase();
    else
      ret += str.charAt(i).toLowerCase();
  }
  return ret;
}
