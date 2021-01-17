$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    var reg =/([a-z])\1{1}/gi;
    var pos = str.search(reg);
    $("#ans").text(pos!=-1? rightNum(str.charAt(pos)): "No double letter found.");
  });
});

function rightNum(char){
  return (char.charCodeAt(0)-96)*4;
}
