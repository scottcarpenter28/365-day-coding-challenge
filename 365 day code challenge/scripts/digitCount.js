$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text(countRecusion(Math.abs(parseInt($('#num').val()))));
  });
});

function countRecusion(num){
  return (num<10)? 1 : countRecusion(num/10)+1;
}
