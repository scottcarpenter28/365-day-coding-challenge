$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var money = parseInt($('#money').val());
    var cost = parseInt($('#cost').val());

    if(money <=0 || cost <=0 || money<cost)
      $("#ans").text("Money and cost must be greater than 0");
    else
      $('#ans').text(findLayers(money,cost));
  });
});

function findLayers(money, cost){
  var layers = 0;
  while(money-layerCost(cost,layers)>=0){
    money -= layerCost(cost,layers);
    layers++;
  }
  return layers-1;
}

function layerCost(cost,layers){
  return Math.pow(layers,2)*cost
}
