$(document).ready(function() {
  $("#output").click(function() {
    var money = parseInt($('#money').val());
    var price = parseInt($('#price').val());
    if(money<=0 || price<=0)
      $('#ans').text("Amount of money and price must be postive");
    else{
      var chocolates=0;
      for(var i=price; i<=money; i+= price){
        chocolates++;
        if(chocolates%3==0)
          chocolates++;
      }
      $('#ans').text(chocolates);
    }

  });
});
