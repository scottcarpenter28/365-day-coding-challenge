$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val().toUpperCase();
    var newStr = ''
    var prevCharCode = 0;

    for (var i = 0; i < str.length; i++) {
      var curCharCode = str.charCodeAt(i) - 64;
      if (curCharCode > 0 && curCharCode < 27) {
        newStr += convertFromCharCode(curCharCode, prevCharCode)
        prevCharCode = curCharCode;
      } else
        newStr += str.charAt(i)
    }

    $('#ans').text(newStr);
  });
});

function convertFromCharCode(cur, prev) {
  return String.fromCharCode(((cur + prev) % 26) + 64);
}
