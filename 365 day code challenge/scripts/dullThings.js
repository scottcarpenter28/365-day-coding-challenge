$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $("#arr").val()
      .split(', ')
      .map(n => parseInt(n));
    let min = Math.min(...arr);
    for(var i=0; i< arr.length; i++){
      if(arr[i] == min){
        arr.splice(i,1)
        console.log(arr);
        break;
      }
    }
    $('#ans').text(arr);
  });
});
