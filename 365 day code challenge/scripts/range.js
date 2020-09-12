$(document).ready(function() {
  $("#output").click(function() {
    var numset =$('#numSet').val().split(', ').map(val => parseInt(val)).sort(sortNumber);
    var consecutive=[];
    var res='';

    for(var i=numset[0]; i<=numset[numset.length-1]; i++){
      if(numset.includes(i) && !numset.includes(i+1) && !numset.includes(i-1))
        res+=i+', ';
      else if(numset.includes(i) && numset.includes(i+1) && numset.includes(i-1))
        consecutive.push(i);
      else if(numset.includes(i) && (numset.includes(i+1) || numset.includes(i-1)))
        consecutive.push(i);
      else if(!numset.includes(i) && consecutive.length<3){
        while(consecutive.length>0){
          res+=consecutive.shift()+', ';
        }
      }
      else if(!numset.includes(i) && consecutive.length>=3){
        res+=consecutive[0]+'-'+consecutive[consecutive.length-1]+', ';
        consecutive=[];
      }
      else
        console.log(i);
    }

    if(consecutive.length<3){
      while(consecutive.length>0){
        res+=consecutive.pop()+', ';
      }
    }
    else if(consecutive.length>=3){
      res+=consecutive[0]+'-'+consecutive[consecutive.length-1]+', ';
      consecutive=[];
    }

    $('#ans').text(res);
  });
});

function sortNumber(a,b){
   return a - b;
}
