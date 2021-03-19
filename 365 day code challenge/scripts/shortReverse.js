$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(',');
      $('#ans').text(shortReverse(arr));
  });
});

function shortReverse(arr){
  var a =[];
  arr.forEach(i => a.unshift(i));
  return a;
}
