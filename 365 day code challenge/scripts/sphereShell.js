$(document).ready(function() {
  $("#output").click(function() {
    var r1 = parseInt($('#r1').val());
    var r2 = parseInt($('#r2').val());

    if(r1>r2 || r1==0 || r2==0)
      $('#ans').text('r1 and r2 must be greater than 0, and r1<r2');
    else
      $('#ans').text(volume(r1,r2));
  });
});

function volume(r1,r2){
  return ((4/3)*Math.PI*(Math.pow(r2,3)-Math.pow(r1,3))).toFixed(3)
}
