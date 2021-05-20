$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let wines = $('#wines').val();
    wines = JSON.parse(wines).wines;
    wines = wines.sort(compPrice);

    if(wines.length > 1)
      $('#ans').text(wines[1].name +', $'+wines[1].price);
    else if(wines.length == 1)
      $('#ans').text(wines[0].name +' '+wines[0].price);
    else
      $('#ans').text(null);
  });
});

function compPrice(wineA, wineB){
  if(wineA.price > wineB.price)
    return 1;
  return -1;
}
