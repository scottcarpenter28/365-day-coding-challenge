const monthNum = {
  0:"January",
  2:"March",
  4:"May",
  6:"July",
  7:"August",
  9:"October",
  11:"Decemeber"
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var start = parseInt($('#start').val())
    var end = parseInt($('#end').val())
    var months=[]

    if(start > end)
      $('#ans').text("Invalid numbers: start year is greater than end year");
    else if(start <= 0 || end <=0)
      $('#ans').text("0 Number found. Make sure all numbers are greater than 0");
    else{
      do{
        for(var i = 0; i <= 11; i++){
          var month = new Date(start,i,1);
          if(month.getDay() == 5 && month.getMonth() in monthNum)
            months.push(monthNum[month.getMonth()]+" "+month.getFullYear())
        }
        start+=1;
      }while(start <= end)
      $('#ans').text(months.join(', '))
    }
  });
});
