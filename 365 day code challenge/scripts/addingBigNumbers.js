$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text(parseInt($('#num1').val())+parseInt($('#num2').val()));
  });
});
