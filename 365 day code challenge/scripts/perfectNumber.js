$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var facts = factor(num);
    $('#ans').text(facts == num ? true : false);
  });
});

function factor(num) {
  var sum = 0;
  for (var i = 1; i <=Math.floor(num / 2); i++) {
    if (num % i == 0)
      sum += i;
  }
  return sum;
}
