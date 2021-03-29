$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sentence = $('#sentence').val();
    let reg = /[aeiou] [aeiou]/gi;
    let result = sentence.match(reg)

    $('#ans').text(result != null);
  });
});
