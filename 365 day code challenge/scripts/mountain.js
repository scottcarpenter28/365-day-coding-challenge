var mountain = [
  ['^', '^', '^', '^', '^', '^'],
  [' ', '^', '^', '^', '^', '^', '^', '^', '^'],
  [' ', ' ', '^', '^', '^', '^', '^', '^', '^'],
  [' ', ' ', '^', '^', '^', '^', '^'],
  [' ', ' ', '^', '^', '^', '^', '^', '^', '^', '^', '^', '^', '^'],
  [' ', ' ', '^', '^', '^', '^', '^', '^'],
  [' ', ' ', '^', '^', '^']
];

$(document).ready(function() {
  printMountain();
  var max = calcHeight();
  console.log("\nMountains max height: "+max);
  printMountain();
});

function printMountain() {
  for (var i = 0; i < mountain.length; i++) {
    var m = '';
    for (var k = 0; k < mountain[i].length; k++)
      m += mountain[i][k];
    console.log(m);
  }
}

function calcHeight() {
  var max = 0;
  removeBlank();
  while (includesCarrot() && max < mountain.length) {
    max++;
    newHeight(max);
  }
  return max;
}

function removeBlank() {
  var maxLength = findMaxLength();

  for (var i = 0; i < mountain.length; i++) {
    for (var k = 0; k < mountain[i].length; k++) {
      if (mountain[i][k] === ' ')
        mountain[i][k] = 0;
    }
    while (mountain[i].length < maxLength)
      mountain[i].push(0)
  }
}

function findMaxLength() {
  var maxL = mountain[0].length;
  for (var i = 1; i < mountain.length; i++) {
    if (maxL < mountain[i].length)
      maxL = mountain[i].length;
  }
  return maxL;
}

function includesCarrot() {
  for (var i = 0; i < mountain.length; i++) {
    if (mountain[i].includes('^'))
      return true;
  }
  return false;
}

function newHeight(maxH) {
  if (maxH == 1) {
    for (var i = 0; i < mountain.length; i++) {
      for (var k = 0; k < mountain[i].length; k++) {

        if (mountain[i][k] == '^' && (i == 0 || k == 0 || i==mountain.length-1))
          mountain[i][k] = 1;
        else if(mountain[i][k] == '^' &&(mountain[i-1][k]==0 || mountain[i][k-1]==0))
          mountain[i][k] = 1;
        else if(mountain[i][k] == '^' &&(mountain[i+1][k]==0 || mountain[i][k+1]==0))
        mountain[i][k] = 1;
      }
    }
  }
  else {
    for(var i=0; i<mountain.length; i++){
      for(var k=0; k<mountain[i].length;k++){
        if(mountain[i][k] == '^' &&(mountain[i-1][k]==maxH-1  || mountain[i][k-1]==maxH-1))
          mountain[i][k] = maxH;
        else if(mountain[i][k] == '^' &&(mountain[i+1][k]==maxH-1  || mountain[i][k+1]==maxH-1))
          mountain[i][k] = maxH;
      }
    }

  }
}
