$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(', ').sort(function(x, y) {
      if (x.length > y.length)
        return -1;
      else if (x.length < y.length)
        return 1;
      else{
        if (parseInt(x) < parseInt(y))
          return -1;
        else
          return 1;

      }
    });

    $('#ans').text(nums);
  });
});

function getLength(a, b) {
  console.log(a.length);
  console.log(b.length);
  return a.length > b.length;
}
