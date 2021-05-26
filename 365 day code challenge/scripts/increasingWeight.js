$(document).ready(function() {
  $("#output").click(function() {
    let str1 = $('#str1').val()
      .split(' ')
      .map(wrd =>{
        let sum = 0;
        for(var i = 0; i< wrd.length; i++)
          sum += wrd.charCodeAt(i);
        return sum;
      })
      .every((cur, ind, arr) => {
        console.log(`${cur} = ${arr[ind+1]}`);
        if(ind < arr.length && cur < arr[ind+1])
          return true;
        else if(ind >= arr.length-1)
          return true;
        return false;
      });
    $('#ans').text(str1)
  });
});
