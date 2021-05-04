$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let height = parseInt($('#height').val());
    let width = parseInt($('#width').val());
    let border = $('#border').val();

    let frame = []
    for(var i =0; i < height; i++){
      temp = border.repeat(width);
      if(i > 0 && i < height-1)
        temp = border + ' '.repeat(width-2) +border
      temp = temp.split('');
      frame.push(temp);
    }
    console.table(frame);
  });
});
