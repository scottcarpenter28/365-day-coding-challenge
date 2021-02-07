$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = Math.abs(parseInt($('#num').val()));
    if(num % 2 == 0)
      console.log("Must be an odd number");
    else
      console.table(generateRug(num));
  });
});

function generateRug(num){
  var rug = [];
  var mid = Math.floor(num/2)
  for(var i = 0; i < num; i++){
    var temp = [];

    for(var k=0; k < num; k++){
      if(i == 0 || k == 0 || i == num-1 || k == num-1)
        temp.push(num-mid-1);
      else if( i == mid && k == mid)
        temp.push(0)
      else{
        if(Math.abs(i-mid) > Math.abs(k-mid))
        temp.push(Math.abs(i-mid));
        else
          temp.push(Math.abs(k-mid));
      }
    }

    rug.push(temp);
  }
  return rug;
}
