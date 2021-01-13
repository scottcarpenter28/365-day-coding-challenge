$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
      console.table(num>=2? arrowPattern(num):"Number must be greater than 2");
  });
});

function arrowPattern(num){
  var res=[]
  for(var i=num; i>=1; i--){
    if(i==num)
      res.push(">".repeat(i));
    else{
      res.unshift(">".repeat(i));
      res.push(">".repeat(i));
    }
  }
  return res;
}
