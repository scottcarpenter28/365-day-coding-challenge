$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if (num <= 0)
      console.log('Number must be greater than or equal to 1.');
    else {
      var box='';
      for (var i = 0; i < num; i++) {
        for (var k = 0; k < num; k++) {
          if (i == 0 || i == num - 1 || k == 0 || k == num - 1)
            box+='*';
          else
            box+=' ';
        }
        box += ' \n';
      }
      console.log(box);
    }

  });
});
