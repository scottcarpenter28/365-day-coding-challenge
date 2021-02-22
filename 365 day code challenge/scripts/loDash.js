$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var words = $('#words').val().match(/[a-z]+/gi);
    words = words.map((wrd, ind) =>
      ind == 0? wrd.toLowerCase():
      wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase()
    );
    $('#ans').text(words.join(''));
  });
});
