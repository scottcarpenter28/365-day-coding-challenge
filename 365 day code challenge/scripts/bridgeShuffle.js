$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr1 = $('#arr1').val().split(',');
    var arr2 = $('#arr2').val().split(',');
    var combine=[];

    while(arr1.length>0 && arr2.length>0){
      if(arr1!==[])
        combine.push(arr1.shift());
      if(arr2!==[])
        combine.push(arr2.shift())
    }
    if(arr1.length>0)
      combine=combine.concat(arr1)
    if(arr2.length>0)
      combine=combine.concat(arr2)
    $('#ans').text(combine);
  });
});
