$(document).ready(function() {
  $("#output").click(function() {
    var s1 = $('#s1').val().toLowerCase();
    var s2 = $('#s2').val().toLowerCase();
    console.log()
    if(s2.indexOf(s1)+s1.length==s2.length || s1.indexOf(s2)+s2.length==s1.length)
      $('#ans').text(true);
    else
      $('#ans').text(false);
  });
});
