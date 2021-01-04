$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var set = $('#set').val().split(', ').map(n => parseInt(n)).sort();
    var close = -1;
    var distance;
    for (var i = 0; i < set.length; i++) {
      var temp;
      set[i] >= num ? temp = i - num : temp = num - i;
      if (close == -1 || temp > distance) {
        distance = temp;
        close = i;
      }
    }
    $('#ans').text(set[close]);
  });
});
