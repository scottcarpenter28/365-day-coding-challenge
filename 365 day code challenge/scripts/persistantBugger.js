$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var count=0;
    const reducer = (acc, val) => acc * parseInt(val);

    while(num>10){
      num = num.toString().split('').reduce(reducer,1);
      count++;
    }

    $('#ans').text(count);
  });
});
