const hex_values ={
  0:0,
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  10:'A',
  11:'B',
  12:'C',
  13:'D',
  14:'E',
  15:'F'
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var rgb = $('#rgb').val().split(', ').map(n => parseInt(n))
    if(rgb[0] < 0 || rgb[0] > 255 ||
    rgb[1] < 0 || rgb[1] > 255 ||
    rgb[2] < 0 || rgb[2] > 255)
      $('#ans').text("RGB Values must be between 0 and 255.")
    else{
      var hex="";
      rgb.forEach(value=>{
        hex += hex_values[Math.floor(value/16)];
        hex += hex_values[value%16];
      });
      $('#ans').text(hex);
    }
  });
});
