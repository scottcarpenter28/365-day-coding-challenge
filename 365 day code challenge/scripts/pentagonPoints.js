$(document).ready(function() {
  $("#output").click(function() {
    var n = parseInt($('#gen').val());
    var points = pentagonal(n);
    $('#ans').text(points);
  });
});

function pentagonal(n){
  var res=0;
  for(var i=1; i<=n; i++)
    res+=((3*Math.pow(i,2))-i)/2;
  return res;
}
