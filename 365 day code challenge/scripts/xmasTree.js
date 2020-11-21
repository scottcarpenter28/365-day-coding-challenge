var maxRow;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var height = parseInt($('#height').val());
    maxRow = height + (height - 1);

    if (height <= 0)
      alert("Height must be a positive number");
    else
      console.log(makeTree())
  });
});

//Input: the maximum amount of * in the middle row of the tree
//out: returns the created tree
function makeTree() {
  var tree = "";

  for (var i = 1; i <= maxRow; i += 2) {
    var row = ""

    for (var k = 0; k < i; k++)
      row += '*';
    tree += padding(row) + "\n\n";
  }

  return tree + padding('|');
}

//Input: takes the max *'s in the middle row and the top half of the diamonds
//Out: returns a padded row of *
function padding(str) {
  while (str.length < maxRow)
    str = ' ' + str + ' ';
  return str;
}
