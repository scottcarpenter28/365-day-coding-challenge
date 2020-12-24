$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var num = parseInt($('#num').val());
      for(var i=num; i>=1; i--){
        var str='';
        for(var k=num; k>=num-i+1; k--)
          str+=k+'';
        console.log(str);
      }
  });
});
