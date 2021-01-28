$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(',').map(n =>parseInt(n)).sort();
    var repeat = parseInt($('#repeat').val());
    if (arr.length <= repeat || arr.length<=1)
      $('#ans').text(arr.toString());
    else
      $('#ans').text(removeExtras(arr, repeat));
  });
});

function findAll(arr, search){
  return arr.filter(n => n==search);
}

function removeExtras(arr, repeat){
  var count = 1;
  for(var i=0; i<arr.length-1; i++){
    if(arr[i]==arr[i+1])
      count++;
    else
      count =1;
    if(count > repeat){
      arr.splice(i,1);
      i--;
    }

  }
  return arr;
}
