$(document).ready(function() {
  $("#test1").click(function() {
    var min_orders = 5;
    var min_price = 20;
    var customers =  [['John Doe' ,[22, 30, 11, 17, 15, 52, 27, 12]],
                      ['Jane Doe' , [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]]];

    $('#ans').text(freePizza(min_orders, min_price, customers));
  });

  $("#test2").click(function() {
    var min_orders = 2;
    var min_price = 50;
    var customers = [ ['Joey Bonzo' , [22, 67, 53, 29]],
                      ['Jennifer Bonzo' , [51, 19]]];

    $('#ans').text(freePizza(min_orders, min_price, customers));
  });

  $("#test3").click(function() {
    var min_orders = 3;
    var min_price = 15;
    var customers = [['Natsumi Sakamoto' , [15, 15, 14]],
                     ['Gorou Hironaka' , [15, 15, 15]],
                     ['Shinju Tanabe' , [120, 240]]];

    $('#ans').text(freePizza(min_orders, min_price, customers));
  });
});

function freePizza(min_orders, min_price, customers){
  var res = "";
  for(var i=0; i<customers.length; i++){
    var name = customers[i][0];
    var free = false;
    var orders = 0;

    for(var k=0; k<customers[i][1].length;k++){
      if(customers[i][1][k]>=min_price) orders++;
    }
    if(orders>=min_orders && !free) res+= name+' gets a free pizza! ';
  }
  if(res ==="") return "No one got a free pizza";
  else return res;
}
