$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let n = parseInt($('#n').val());
    let k = parseInt($('#k').val());
    $('#ans').text(nthFib(n,k));
  });
});

function nthFib(n,k){
  if(n<=1)
    return 1;

  let sequence = initalizeArr(n);
  while(sequence.length < k){
    let next = getNext(n,sequence);
    sequence.push(next);
  }
  return sequence.pop();
}

function initalizeArr(n){
  let arr = "0".repeat(n-1)
    .split('')
    .map(n => parseInt(n));
  arr.push(1);
  return arr;
}

function getNext(n, sequence){

  let len = sequence.length;
  let slicedArr = sequence.slice(len-n,len);
  return slicedArr.reduce((acc,cur) => acc+cur);
}
