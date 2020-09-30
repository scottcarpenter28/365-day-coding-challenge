$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if (num <= 0)
      $('#ans').text('Number must be greater than 0');
    else {
      console.log(num + ' bottles of beer on the wall, ' + num + ' bottles of beer. Take 1 down,');
    }
    $('#ans').text(removeBeer(num, 1, 1) + ' itterations.');
  });
});

function removeBeer(num, itt, removal) {
  console.log('pass it around, ' + (num - removal) + ' bottles of beer on the wall...');
  if (num - removal <= 0) {
    console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall...');
    return itt++;
  } else {
    console.log((num - removal) + ' bottles of beer on the wall, ' + (num - removal) + ' bottles of beer. Take' + (removal + removal) + 'down,');
    return removeBeer(num - removal, itt += 1, removal += removal);
  }
}
