$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    if (str.length < 1)
      $('#ans').text(str);
    else
      $('#ans').text(shorthand(str));
  });
});

function shorthand(str) {
  var star = '';
  var count = 1;

  for (var i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == str.charAt(i + 1))
      count++;
    else {
      star += concat(str.charAt(i), count);
      count = 1;
    }

    if (i == str.length - 2) {
      if (str.charAt(i) == str.charAt(i + 1))
        star += concat(str.charAt(i), count)
      else
        star += concat(str.charAt(i), count) + str.charAt(i + 1);
    }
  }
  
  return star;
}

function concat(char, count) {
  if (count == 1)
    return char;
  else if (count > 1)
    return char + '*' + count;
}
