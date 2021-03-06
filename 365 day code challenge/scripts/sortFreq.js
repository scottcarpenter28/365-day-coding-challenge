$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(', ').map(n => parseInt(n));
    $('#ans').text(arrSort(arr).sort(custom));
  });
});

function arrSort(arr){
  var lengthArr =[]
  while(arr.length > 0){
    var num = arr[0];
    var temp = arr.filter( n => n == num);
    arr = arr.filter(n => n != num);
    lengthArr.push(temp);
  }
  return lengthArr;
}

function custom(a, b){
  if(a.length > b.length)
    return -1;
  else if(a.length < b.length)
    return 1;
  else{
    if(a[0] < b[0])
      return -1;
    else
      return 1;
  }
}
