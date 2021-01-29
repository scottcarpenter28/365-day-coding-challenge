$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var numArr = $('#num').val().split('').map(n =>parseInt(n));
    findLonley(numArr);
  });
});

function findLonley(numArr){
  console.log("*".repeat(50));
  for(var i=0; i<numArr.length;i++){
    console.log("Digit: "+numArr[i]);
    var leftSum = findLeft(numArr[i],numArr.slice(0,i));
    var rightSum = findRight(numArr[i],numArr.slice(i+1));
    var totalSum = leftSum+rightSum;
    console.log("\tTotal Sum: "+totalSum)
  }
  console.log("*".repeat(50)+"\n");
}

function findLeft(num, arr){
  var sum = 0;
  for(var i=0; i<num && i<arr.length; i++){
    sum += arr[arr.length-i-1]
  }
  console.log("\tLeft Sum: "+sum)
  return sum;
}

function findRight(num, arr){
  var sum = 0
  for(var i=0; i<num && i<arr.length; i++){
    sum += arr[i];
  }
  console.log("\tRight Sum: "+sum)
  return sum;
}
