$(document).ready(function() {
  $("#output").click(function() {
    var arr1 = $('#arr1').val().split(' ').map(n => parseInt(n));
    var arr2 = $('#arr2').val().split(' ').map(n => parseInt(n));

    var intersect=intersection(arr1, arr2);
    var union= unionize(arr1, arr2);

    console.table(intersect);
    console.table(union);
  });
});

function intersection(arr1, arr2){
  var ret=[];
    for(var i=0; i<arr1.length;i++){
    if(arr2.includes(arr1[i]) && !ret.includes(arr1[i]))
      ret.push(arr1[i]);
  }
  return ret;
}

function unionize(arr1, arr2){
  var ret=[];
    for(var i=0; i<arr1.length;i++){
      if(!ret.includes(arr1[i]))
        ret.push(arr1[i]);
    }

    for(var i=0; i<arr2.length;i++){
      if(!ret.includes(arr2[i]))
        ret.push(arr2[i]);
    }
    return ret;
}
