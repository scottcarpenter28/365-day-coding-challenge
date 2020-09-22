$(document).ready(function() {
  $("#output").click(function() {
      var str = $('#symbol').val();
      var res = true;
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) !== '=' && str.charAt(i) !== '+') {
          if (str.charAt(i - 1) != '+' || str.charAt(i + 1) != '+' && i !== 0) {
            res = false;
            break;
          }
        }
      }
    $('#ans').text(res);
  });
});
