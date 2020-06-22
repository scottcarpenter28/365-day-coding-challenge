//console.log( evil('12/5*9+9.4*2') ); // => 40.4

$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var ans = $('#exp').val();
    ans = eval(ans);
    $('#number').text(ans);
    });
});

function eval(fn) {
  return new Function('return ' + fn)();
}
