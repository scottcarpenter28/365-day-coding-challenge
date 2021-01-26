$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var row = parseInt($('#row').val());
    var col = parseInt($('#col').val());
    if(row <1 || col<1)
      console.log("Row and column must have a size of at least one.")
    else
      console.table(makeGrid(row, col));
  });
});

function makeGrid(row, col){
  var grid = [];
  for(var i=1;i<=row; i++){
    grid.push([]);
    for(var k=0; k<col; k++){
      if(k==0)
        grid[i-1].push(i+k);
      else
        grid[i-1].push(grid[i-1][k-1]+row);
    }
  }
  return grid;
}
