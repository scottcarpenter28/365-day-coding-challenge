$(document).ready(function() {
  $("#output").click(function() {
    var cash = parseInt($('#num').val());
    if(cash < 1 || cash > 1500)
      $('#ans').text(-1);
    else
      $('#ans').text(findBills(cash));
  });
});

function findBills(cash){
  var billsTotal = 0;
  var bills ={
    'Five hundred' : 0,
    'Two hundred' : 0,
    'One hundred' : 0,
    'Fifty' : 0,
    'Twenty' : 0,
    'Ten' : 0
  };

  while(billsTotal < cash){
    if(billsTotal + 500 <= cash){
      bills['Five hundred'] ++;
      billsTotal += 500;
    }
    else if(billsTotal + 200 <= cash){
      bills['Two hundred'] ++;
      billsTotal += 200;
    }
    else if(billsTotal + 100 <= cash){
      bills['One hundred'] ++;
      billsTotal += 100;
    }
    else if(billsTotal + 50 <= cash){
      bills['Fifty'] ++;
      billsTotal += 50;
    }
    else if(billsTotal + 20 <= cash){
      bills['Twenty'] ++;
      billsTotal += 20;
    }
    else{
      bills['Ten'] ++;
      billsTotal +=10;
    }
  }

  if (billsTotal != cash)
    return -1;
  else
    return getBils(bills);
}


function getBils(bills){
  var retStr = '';
  if(bills['Five hundred'] != 0)
    retStr+= 'Five hundred: '+ bills['Five hundred']+',';
  if(bills['Two hundred'] != 0)
    retStr+= 'Two hundred: '+ bills['Two hundred']+',';
  if(bills['One hundred'] != 0)
    retStr+= 'One hundred: '+ bills['One hundred']+',';
  if(bills['Fifty'] != 0)
    retStr+= 'Fifty: '+ bills['Fifty']+',';
  if(bills['Twenty'] != 0)
    retStr+= 'Twenty: '+ bills['Twenty']+',';
  if(bills['Ten'] != 0)
    retStr+= 'Ten: '+ bills['Ten']+',';
  return retStr;
}
