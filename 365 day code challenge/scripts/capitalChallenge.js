$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var str1 = $('#str1').val();
      var str2 = $('#str2').val();

      $('#ans').text(findCaps(str2,str1)+findCaps(str1,str2));
  });
});

function findCaps(str1, str2){
  var res='';

  for(var i=0; i<str1.length; i++){
    var code1 = str1.charCodeAt(i);

    if(code1>=65 && code1<=90 && i<str2.length)
      res+=str2.charAt(i);
  }
  return res;
}
