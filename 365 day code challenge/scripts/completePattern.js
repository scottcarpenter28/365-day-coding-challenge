$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var num = parseInt($('#num').val());
      for(var i=1; i<=num; i++)
        console.log(i.toString().repeat(i));
      console.log('')
  });
});
