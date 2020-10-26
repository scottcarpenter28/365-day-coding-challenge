$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num & 1)
      $('#ans').text("Odd");
    else
      $('#ans').text("Even");
  });
});
