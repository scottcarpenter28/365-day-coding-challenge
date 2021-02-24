$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var words = $('#words').val()
      .split(' ')
      .map(wrd => wrd.split('').reverse().join(''))
      .join(' ');
    $('#ans').text(words);
  });
});
