var badChar =/\W/;

$(document).ready(function() {
  $("#change").click(function() {
    $('#ans').text($('#str').val().split(' ').map(pigLatin).join(' '));
    });
});

function pigLatin(str){
  if(!badChar.test(str)){
    var s = str.split('');
    s.push(s.shift());
    str = s.join('');
    return str+'ay';
  }
  else
    return str;

}
