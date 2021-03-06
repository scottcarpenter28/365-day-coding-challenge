$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(',').map(n => parseInt(n));
    $('#ans').text(removeDuplicates(arr));
  });
});

function removeDuplicates(arr){
  var result =[];
  for(var i=0; i<arr.length; i++){
    lastIndex = arr.lastIndexOf(arr[i]);
    if(i == lastIndex)
      result.push(arr[i]);
  }
  return result;
}
