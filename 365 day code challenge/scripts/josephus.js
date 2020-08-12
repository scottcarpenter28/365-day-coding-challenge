$(document).ready(function() {
  $("#output").click(function() {
    //Setup
    var men = parseInt($('#men').val());
    var k = parseInt($('#count').val());
    var group = generateGroup(men);

    var c=0;          //Counts to K
    var arrCnt=0;     //Track current array index
    console.log(group.toString());
    while(group.length>1){
      //Removes one item from the array when c=k
      if(c==k){
        console.log(group.splice(arrCnt-1,1)+" has been eliminated.");
        arrCnt-=2;
        c=0;
      }
      else c++;

      //Checks to see if the length of the array is greater than or equal the count. Resets to 0 or increments.
      if(arrCnt>=group.length)
        arrCnt=0;
      else
        arrCnt++;
    }
    $('#ans').text(group[0]+' is the last man standing.')
  });
});

function generateGroup(men){
  //Sets array
  var temp=[];
  for(var i=1; i<=men; i++)
    temp.push(i);
  return temp;
}
