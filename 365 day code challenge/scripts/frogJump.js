$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      $('#ans').text(getJumps(1, 0, parseInt($('#num').val())));
  });
});

function getJumps(leapDist, currPos, destination){
  //Debug
  //console.log("Leap Distan: "+leapDist+'\nCurrent pos: '+currPos+'\nDestination: '+destination);
  if(currPos>=destination)
    return 0;
  else if(currPos+leapDist<=destination)
    return 1+getJumps(leapDist+1, currPos+leapDist, destination);
  else
    return 1+getJumps(leapDist+1, currPos+(leapDist*-1),destination);
}
