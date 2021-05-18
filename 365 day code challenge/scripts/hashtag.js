$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val();
    let reg = /\w+/gi
    str = str.match(reg);
    if (str == null)
      $('#ans').text('False, Expected an empty string to return false');
    else
      $('#ans').text(`#${str.join('')}`)
  });
});
