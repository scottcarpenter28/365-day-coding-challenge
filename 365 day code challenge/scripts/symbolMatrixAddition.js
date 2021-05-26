$(document).ready(function() {
  const vals = {
    "#" : 5,
    "O" : 3,
    "X" : 1,
    "!" : -1,
    "!!" : -3,
    "!!!" : -5
  }
  $("#output").click(function() {
    let mat = $('#input').val();
    mat = JSON.parse(mat)["mat"];
    let sum = 0;

    mat.forEach((arr, i) => {
      arr.forEach((item, i) => {
        if(item in vals)
          sum += vals[item];
      });
    });
    $('#ans').text(sum);
  });
});
