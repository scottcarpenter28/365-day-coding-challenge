$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $('#arr').val();
    arr = JSON.parse(arr);
    arr = arr["Arr"];
    
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i].map(bitFlip);
    }
    console.table(arr);
  });
});

function bitFlip(num){
  num = parseInt(num);
  if(num == 0)
    return 1;
  return 0;
}
