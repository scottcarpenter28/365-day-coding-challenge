
$(document).ready(function() {
  $("#output").click(function() {
        $('#before').text((parseInt($('#after').val())*100)/(100-parseInt($('#off').val())));
    });
});
