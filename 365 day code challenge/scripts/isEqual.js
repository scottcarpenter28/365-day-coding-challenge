$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr1 = $("#arr1").val().split(', ');
    let arr2 = $("#arr2").val().split(', ');
    let option = $('#flag').val();
    if(option == 'true')
      option = true;
    else
      option = false;
    $('#ans').text(arr1.isEqual(arr2, option));
  });
});


Array.prototype.isEqual = function(arr, option){
  console.log(option);

  for(var i = 0; i < this.length; i++){
    if(arr[i]!=this[i] && !option)
      return false;
    else if(arr[i]==this[i] && !option)
      continue
    if(!arr.includes(this[i]) && option)
      return false;
  }
  return true;
}
