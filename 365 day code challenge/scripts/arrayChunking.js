$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let arr = $('#arr').val().split(", ");
    let len = parseInt($('#len').val());
    if(len < 0)
      $('#ans').text("Length must be > 0");
    else
      $('#ans').text(divideArr(arr,len));
  });
});

function divideArr(arr, len){
  let splitArr = [];
  let temp = [];
  while(arr.length > 0){
    temp.push(arr.shift())
    if(temp.length == len){
      splitArr.push(temp);
      temp = []
    }
  }
  if(temp.length > 0)
    splitArr.push(temp);
  console.table(splitArr)
  return "";
}
