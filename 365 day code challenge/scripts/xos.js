$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    ($('#str').val().match(/[x]/gi).join('').length == $('#str').val().match(/[o]/gi).join('').length? $('#results').text('True') : $('#results').text('False'));
  });
});
