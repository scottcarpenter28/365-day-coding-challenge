$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var n = parseInt($('#num').val());
    var sqr=Math.pow(n,2);
    var seq = [];
    var sum = 0;

    for(var i=n-1; i>0; i--){
      if((Math.pow(i,2)+sum) <=sqr){
        sum +=Math.pow(i,2);
        seq.push(i);
      }

    }
    if(sum == sqr)
      $('#seq').text(ansString(seq)+" = "+sqr);
    else
      $('#seq').text("No square found.");
  });
});

function ansString(seq){
  var str='';
  for(var i=0; i<seq.length; i++)
    str+='('+seq[i]+'^2)';
  return str;
}
