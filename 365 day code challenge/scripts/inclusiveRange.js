$(document).ready(function() {
  $("#output").click(function() {
    var low = parseInt($('#low').val());
    var high = parseInt($('#high').val());
    if(low>high)
      $('#ans').text("Lower range must be less than upper");
    else
      $('#ans').text(inclusive(low,high));
  });
});

function inclusive(low, high){
  return low==high? ' '+low : ' '+low+inclusive(low+1, high);
}
