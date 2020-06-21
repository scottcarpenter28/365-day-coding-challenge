$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = '';

    for(var i=0; i<10; i++){
      num+=Math.floor(Math.random()*10);
      if(i==2||i==5) num +='-';
    }
    $('#number').text(num);
  });
});
