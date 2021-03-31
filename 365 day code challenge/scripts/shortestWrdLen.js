$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sentence = $('#sentence').val()
      .split(' ')
      .map( wrd => wrd.length);
    $('#ans').text(Math.min(...sentence));
  });
});
