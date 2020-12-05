$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var num = parseInt($("#num").val());
      var sqr=Math.pow(num,2);
      var checkLast=sqr.toString().indexOf(num.toString());
      if(checkLast+num.toString().length==sqr.toString().length)
        $('#ans').text(true);
      else
        $('#ans').text(false);
  });
});
