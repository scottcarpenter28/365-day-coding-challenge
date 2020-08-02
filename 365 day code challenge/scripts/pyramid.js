var maxRow;

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    maxRow = $("#num").val();
    if (maxRow <= 0 || maxRow % 2 === 0)
      alert("Must be an odd number, greater than 0");
    else {
    var pyramid = makePyramid();
      console.log(pyramid)
    }

  });
});

function makePyramid(){
  //Input: the maximum amount of * in the middle row of the diamonds
  //out: returns the created pyramid
  var pyramid = "";

  for (var i = 1; i <= maxRow; i += 2) {
  var row = ""
    for (var k = 0; k < i; k++) {
      row += '*';
    }
      pyramid += padding(row) + "\n";
  }
  return pyramid;
}

function padding(str){
  //Input: takes the max *'s in the middle row and the top half of the diamonds
  //Out: returns a padded row of *
  while(str.length < maxRow){
    str = ' '+str+' ';
  }
  return str;
}
