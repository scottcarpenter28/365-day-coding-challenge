$(document).ready(function() {
  $("#output").click(function() {
    var n = parseInt($('#n').val());
    if (n <= 0)
      console.log('N must be greater than 0');
    else {
      for (var i = 0; i < Math.floor(50 / n); i++) {
        var temp = [];
        for (var k = 0; k < n; k++)
          temp.push(Math.floor(Math.random() * 300));
        console.log(temp);
      }
    }
  });
});
