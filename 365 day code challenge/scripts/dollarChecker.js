var names =[];
$(document).ready(function() {
  $("#output").click(function() {
    $('#after').text('$'+(parseFloat($('#amt').val()).toFixed(2)));
  });
});
