$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    $('#total').text( (parseInt($('#onBus').val()) + parseInt($('#total').html()) - parseInt($('#offBus').val())) ) ;
    });
});
