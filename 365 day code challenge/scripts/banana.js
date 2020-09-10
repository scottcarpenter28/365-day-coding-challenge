var dashCounters;

$(document).ready(function() {
  $("#output").click(function() {
    var str =$('#str').val().split('');
    dashCounters=[];
    for(var i=0; i<str.length-"banana".length;i++){
      dashCounters.push((str.length-"banana".length)-i-1);
    }
    $('#ans').text(combinations(str));
  });
});

function combinations(str){
  var list='';

  do{
      var temp=str.slice(0);
    temp=insertDashses(temp);
    if(temp.join().replaceAll(/[^\w\s]/gi,'')=='banana'){
      list+=" "+temp.join('')+',';
    }
  }while(checkDashes(str));
  return list;
}

function insertDashses(temp){
  for(var i=0; i<dashCounters.length; i++){
    var l=dashCounters[i];
    temp[l]='-';
  }
      console.log(temp);
  return temp;
}

function checkDashes(str){
  for(var i=0; i<dashCounters.length;i++){
    if(dashCounters[i]< str.length-i-1){
    dashCounters[i]++;
    return true;
    }
  }
  return false;
}

//must move last dash in the string
//create array to track position of last dash in array. when it equals length, move to the next in line.
//Each counter must stop c-k

//while(checkDashPosition) this will check to see if the dashes are at their end spot
