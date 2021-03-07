$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var fire = $('#str').val().split('Y');
    var width = parseInt($('#width').val());
    if(width <= 0 || fire.length == 0)
      $('#ans').text("Invalid input, water bomb must be > 0, and at least one fire reported.");
    else
      $('#ans').text(extinguishFire(fire,width));
  });
});


function extinguishFire(fire, width){
  var bombs = 0;
  for(var i=0; i<fire.length; i++){
    if(fire[i].length < width)
      bombs += 1;
    else
      bombs += Math.ceil(fire[i].length/width);
  }
  return bombs;
}
