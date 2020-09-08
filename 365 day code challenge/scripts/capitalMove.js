var cap='';
var low='';
$(document).ready(function() {
  $("#output").click(function() {
    cap='';
    low='';

    var str = $('#str').val();
    for(var i=0; i<str.length; i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
      cap+=str.charAt(i);
    else
      low+=str.charAt(i);
    }
    $('#ans').text(cap+low);
  });
});
