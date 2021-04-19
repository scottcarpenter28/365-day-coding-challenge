$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let size = parseInt($('#num').val());
    let sqr1 = $('#sqr1').val();
    let sqr2 = $('#sqr2').val();

    makeBoard(size, sqr1, sqr2);
  });
});

function makeBoard(size, sqr1, sqr2){
  let board = [];
  for(i = 0; i < size/2; i++){
    board.push(makeRow(size, sqr1, sqr2))
    board.push(makeRow(size, sqr2, sqr1));
  }
  console.table(board.slice(0,size));
}

function makeRow(size, sqr1, sqr2){
  let combined = sqr1 + sqr2;
  return combined.repeat(size).substr(0,size).split('');
}
