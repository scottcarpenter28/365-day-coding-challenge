$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var size = parseInt($('#size').val());
      var res = [];
      for(var i=1; i<=size; i++)
        res.push(i);
      $('#ans').text(res.toString());
  });
});
