$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sortedStr = $('#str').val()
      .replaceAll(' ','')
      .split("")
      .sort(sortLetters);
    let grouped = groupSorted(sortedStr);
    let maxLen = longest(grouped);
    let allLetters = mostLetters(grouped, maxLen);
    $('#ans').text(allLetters);
  });
});

function sortLetters(a,b){
  if(a.charCodeAt(0) > b.charCodeAt(0))
    return 1;
  return -1;
}

function groupSorted(arr){
  let group = [];
  let temp = [arr[0]];

  for(var i=1; i<arr.length; i++){
    if(temp.indexOf(arr[i]) >=0)
      temp.push(arr[i]);
    else{
      group.push(temp);
      temp = []
      temp.push(arr[i]);
    }
  }

  group.push(temp);
  return group;
}

function longest(arr){
  arr = arr.map(i => i.length);
  return Math.max(...arr);
}

function mostLetters(arr, maxLen){
  if(maxLen <=1 )
    return "No result";
  arr = arr.filter(i => i.length == maxLen);
  arr = arr.map(i => i[0]);
  return arr;
}
