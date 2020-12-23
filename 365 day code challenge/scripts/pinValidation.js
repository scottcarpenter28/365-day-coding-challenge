$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var pin = $('#nums').val();
      console.log(pin.length!==4 && pin.length!=6)
      if((/[a-z]/gi).test(pin) || (pin.length!=4 && pin.length!=6))
        $('#ans').text('False');
      else
        $('#ans').text('True');
  });
});
