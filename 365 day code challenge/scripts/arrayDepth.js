$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $('#arr').val();
    arr = JSON.parse(arr);
    arr = arr["Arr"];
    $('#ans').text(getDepth(arr));
  });
});

function getDepth(arr){
  let depth = 1;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'object')
      depth += getDepth(arr[i]);
  }
  return depth;
}
