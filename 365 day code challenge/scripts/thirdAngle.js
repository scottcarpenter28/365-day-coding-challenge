$(document).ready(function() {
  $("#output").click(function() {
    var angle1 = parseInt($('#angle1').val());
    var angle2 = parseInt($('#angle2').val());
    var missingAngle = 180 - (angle1 + angle2);
  
    if(parseInt($('#angle1').val())<=0 || parseInt($('#angle2').val())<=0 || (missingAngle+angle2+angle1)>180 ||(angle1==90 && angle2==90))
      $('#ans').text("Angles of a triangle must add to 180! Check inputs");
    else
      $('#ans').text(missingAngle)
  });
});
