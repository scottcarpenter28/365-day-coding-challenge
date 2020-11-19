$(document).ready(function() {
  $("#output").click(function() {
    var res = [...$('#str').val().matchAll(/([A-Z])[a-z]*/g)];
    var str ='';
    for(var i=0; i<res.length; i++)
      str+=res[i][0]+' ';
    $("#ans").text(str);
  });
});
