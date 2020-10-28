$(document).ready(function() {
  $("#output").click(function() {
    var letters = $('#letters').val().toLowerCase();
    var found = false;
    var i = 1;
    var missing = '';

    while (i < letters.length && !found) {
      if (letters.charCodeAt(i - 1) != letters.charCodeAt(i)-1) {
        missing = String.fromCharCode(letters.charCodeAt(i)-1);
        found = true;
      }
      i++;
    }
    if(!found)
      $('#ans').text('None found');
    else
      $('#ans').text(missing);
  });
});
