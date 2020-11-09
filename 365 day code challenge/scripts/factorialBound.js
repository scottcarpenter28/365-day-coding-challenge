$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text(factTest(Math.abs(parseInt($('#num').val()))))
  });
});

function factTest(num) {
  var i = 1;
  var fact = 1;
  while (fact < num) {
    fact *= i;
    i++;
  }
return (num==fact)? [num, i-1]: 'Not exact';
}
