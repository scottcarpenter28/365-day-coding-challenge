$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#shift').val());
    var mat =[['a','b','c','d'],
              ['1','2','3','4'],
              ['c','o','d','e'],
              ['b','l','a','h']];

    console.log('Before: ');
    printMat(mat);

    var res =shiftMat(mat, num);
    console.log('After: ');
    printMat(res);
  });
});

function printMat(mat){
  for(var i=0; i<mat.length;i++)
    console.log(mat[i].toString());
  console.log("")
}

function shiftMat(mat, num){
  var arr = mat.toString().split(',');
  var shift =[];

  for(var i=0; i<arr.length;i++){
    if(i>=(arr.length-num))
      shift.unshift(arr[i]);
    else
      shift.push(arr[i]);
  }
  return toMatrix(shift, mat[0].length);
}

function toMatrix(shift,row){
  var res=[];
  var temp=[];
  for(var i=0; i<shift.length;i++){
    temp.push(shift[i]);
    if(temp.length>=row){
      res.push(temp)
      temp=[];
    }
  }
  return res;
}
