$(document).ready(function() {
  $("#output").click(function() {
    let str1 = $('#str1').val();
    let str2 = $('#str2').val();
    let result = str2;
    while(result.length < str1.length){
      result += str2;
    }
    $('#ans').text(result.substring(0,str1.length));
  });
});
