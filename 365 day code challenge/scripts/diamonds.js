var maxRow;

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    maxRow = $("#diamond").val();
    if (maxRow <= 0 || maxRow % 2 === 0)
      alert("Must be an odd number, greater than 0");
    else {
    var fullDiamond = diamond();
      console.log(fullDiamond)
    }
  });
});

function diamond(){
  //Input: the maximum amount of * in the middle row of the diamonds
  //out: returns the created diamond
  var diamond = "";

  for (var i = 1; i <= maxRow; i += 2) {
  var row = ""
    for (var k = 0; k < i; k++) {
      row += '*';
    }
      diamond += padding(row) + "\n";
  }
  var reverse = rev(diamond) ;
  diamond += reverse;
  return diamond;
}

function padding(str){
  //Input: takes the max *'s in the middle row and the top half of the diamonds
  //Out: returns a padded row of *
  while(str.length < maxRow){
    str = ' '+str+' ';
  }
  return str;
}

function rev(str){
  //Input: the top half of the diamond padded
  //Out: reverses the array to create the bottom half. Removes the middle row.
  var newSTR = "";
      for (var i = str.length-maxRow-3; i >= 0; i--) {
          newSTR += str[i];
      }
  return newSTR;
}
