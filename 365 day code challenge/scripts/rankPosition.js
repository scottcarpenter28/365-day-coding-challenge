var scores = [];
$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    scores.push([$('#name').val(), parseInt($('#points').val())]);
    scores.sort(compare);
    $('#scores').text(myToStr());
  });
});

function compare(a, b) {
  if (a[1] > b[1]) return -1;
  else if (b[1] > a[1]) return 1;
  else if (a[0] > b[0]) return -1
  else return 1;
  return 0;
}

function myToStr() {
  var str = '';
  for (var i = 0; i < scores.length;i++)
    str += '[' + scores[i].toString() + ']';
  return str;
}
