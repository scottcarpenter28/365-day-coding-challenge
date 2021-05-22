$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $("#arr").val()
      .split(', ')
      .map(n => parseInt(n));
    let pos = arr.filter(n => n>0);
    let neg = arr.filter(n => n<0);
    let result = [];

    while(pos.length > 0 && neg.length > 0){
      result.push(neg.shift());
      result.push(pos.shift());
    }
    $('#ans').text(result);
  });
});
