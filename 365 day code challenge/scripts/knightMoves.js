const letter = {
  'A':1,
  'B':2,
  'C':3,
  'D':4,
  'E':5,
  'F':6,
  'G':7,
  'H':8,
  1:'A',
  2:'B',
  3:'C',
  4:'D',
  5:'E',
  6:'F',
  7:'G',
  8:'H'
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let start = $('#start').val().split('');
    let col = letter[start[0].toUpperCase()];
    let row = parseInt(start[1]);

    let posibleMoves =[
      [col-2,row+1],
      [col+2,row-1],
      [col-2,row-1],
      [col+2,row+1],
      [col+1,row+2],
      [col+1,row-2],
      [col-1,row+2],
      [col-1,row-2]
    ];

    posibleMoves = posibleMoves.filter(checkMove);
    posibleMoves.sort(sortMoves);
    posibleMoves = posibleMoves.map(move => [letter[move[0]],move[1]]);

    $('#ans').text(posibleMoves.join(' | '));
  });
});

function checkMove(move){
  return move.every(n => n>0 && n<9);
}

function sortMoves(a, b){
  if(a[0] < b[0])
    return -1;
  else if(b[0]< a[0])
    return 1;
  else if(a[1]>b[1])
    return 1;
  return -1;
}
