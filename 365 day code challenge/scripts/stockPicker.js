$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var prices = $('#words').val().split(', ').map(n => parseInt(n));
    $('#ans').text(getProfit(prices));
  });
});

function getProfit(prices){
  var max = -1;
  prices.forEach((price,i) =>{
    for(var k = i+1; k < prices.length; k++){
      if(price > prices[k])
        break;
      if(prices[k]-price > max)
        max = prices[k]-price;
    }
  });
  return max;
}
