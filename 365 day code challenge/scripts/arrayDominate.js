$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(',').map(n => Math.abs(parseInt(n))).sort();
    var longestCount =0;
    var tempCount=0;
    var longestNum =-1;
    var tempNum=0;

    for(var i=0; i<arr.length; i++){

      if(tempCount>longestCount){
        longestCount=tempCount;
        longestNum=tempNum;
      }
      if(arr[i]==arr[i+1]){
        tempNum=arr[i];
        tempCount++;
      }
      else{
        tempNum=0;
        tempCount=0;
      }

    }
    
    if(longestNum<1)
      longestNum=-1;
    $('#ans').text(longestNum);
  });
});
