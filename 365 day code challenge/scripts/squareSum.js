$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var res=0;
    var nums = $('#nums').val().split(", ").map(n =>
      res+=Math.pow(parseInt(n),2)
    );
    $('#ans').text(res)
  });
});
