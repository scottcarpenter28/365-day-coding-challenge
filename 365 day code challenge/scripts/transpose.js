$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    console.clear();
    let matrix = $("#mat").val();
    matrix = JSON.parse(matrix);
    matrix = matrix['matrix'];
    console.table(matrix)
    let tranposed = [];
    for(var i = 0; i < matrix[0].length; i++){
      let temp = [];
      for(var k = 0; k < matrix.length; k++){
        console.log(matrix.length);
        temp.push(matrix[k][i]);
      }
      tranposed.push(temp);
    }

    console.table(tranposed);

  });
});
