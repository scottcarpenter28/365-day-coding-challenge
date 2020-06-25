$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var exp1 = $('#exp1').val();
    var exp2 = $('#exp2').val();
    var l = parseInt($('#num').val(),10);

    if (exp1.indexOf('x')=== -1)
      $('#ans').text("Expression 1 does not contain an 'x'");
    else if(exp2.indexOf('x') === -1)
      $('#ans').text("Expression 2 does not contain an 'x'");
    else {
      var ans=[1];
      for(var i=1; i<=l; i++){
        var n = ans[i-1];
        var tempExp = exp2.replace('x',n.toString());
        ans.push(parseInt(eval(tempExp)));

        tempExp = exp1.replace('x',n.toString());
        ans.push(parseInt(eval(tempExp)));
      }
      $('#ans').text(ans.toString());
    }
  });
});

function eval(exp) {
  return new Function('return ' + exp)();
}
