var res;
$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    res =['b','a'];
    fibWord(num);
    $('#ans').text(res.join(', '));
    console.table(res);
  });
});

function fibWord(num){
  if(num<=1)
    return res.push(res[res.length-1]+res[res.length-2]);
  else{
    res.push(res[res.length-1]+res[res.length-2]);
    return fibWord(num-1);
  }
}
