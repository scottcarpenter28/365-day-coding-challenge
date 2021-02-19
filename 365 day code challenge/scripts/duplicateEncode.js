$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $("#str").val().toLowerCase();
    $('#ans').text(encodeDuplicate(str));
  });
});

function encodeDuplicate(str){
  var retStr = str;
  for(i = 0; i < str.length; i++){
    if(str.indexOf(str.charAt(i)) != str.lastIndexOf(str.charAt(i)))
      retStr = retStr.replaceAll(str.charAt(i),')');
    else
      retStr = retStr.replace(str.charAt(i),'(');
  }
  return retStr;
}
