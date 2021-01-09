$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str1 = $('#str1').val().toLowerCase();
    var str2 = $('#str2').val().toLowerCase();
    $('#ans').text(str2.length==1? str1.split('').filter(l => l==str2).length: 'String 2 must contain only one letter.');
  });
});
