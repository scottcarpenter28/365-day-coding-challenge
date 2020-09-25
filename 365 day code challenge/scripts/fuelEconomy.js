$(document).ready(function() {
  $("#output").click(function() {
$('#ans').text((parseFloat($('#miles').val()) / parseInt($('#mpg').val())).toFixed(2)+' gallons');
  });
});
