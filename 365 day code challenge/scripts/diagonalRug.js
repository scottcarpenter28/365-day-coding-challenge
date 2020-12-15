$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var size = parseInt($('#size').val());
      var direction = $('#direction').val();
      if(direction =='Left' && size>0)
        console.table(leftDiagonal(size));
      else if(direction == 'Right' && size>0)
        console.table(rightDiagonal(size));
      else
        console.log("Size must be greater than 0.");
  });
});

function leftDiagonal(size){
  var res=[];
  for(var i=size; i>=0;i--){
    var row=[];
    for(var k=size; k>=0; k--){
      if(i-k>=0)
        row.push(i-k);
      else
        row.push(size-(k-i)+1);
    }
    res.push(row);
  }
  return res;
}

function rightDiagonal(size){
  var res=[];
  for(var i=size; i>=0;i--){
    var row=[];
    for(var k=0; k<=size; k++){
      if(i-k>=0)
        row.push(i-k);
      else
        row.push(size-(k-i)+1);
    }
    res.push(row);
  }
  return res;
}
