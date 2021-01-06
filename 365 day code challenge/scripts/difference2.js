$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = $('#nums').val().split(', ').map(n => parseInt(n)).sort();
    var res =[];
    for(var i=0; i<num.length; i++){
      for(var k=i; k<num.length; k++){
        if(Math.abs(num[i]-num[k]) ==2)
          res.push([num[i],num[k]])
      }
    }
    console.table(res);
  });
});
