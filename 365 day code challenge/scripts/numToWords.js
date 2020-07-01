const SINGLE = ['One','Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TEEN = ['Ten', 'Eleven', 'Twelve','Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const LARGE = ['Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var numTxt;

$(document).ready(function() {
  $("#eq").click(function() {
    var num = $('#num').val();
    numTxt = '';

    if(num.length==1){
      numTxt = SINGLE[parseInt(num)-1];
    }
    else if(num.length == 2){
      numTxt = hundredsCheck(num);
    }
    else if(num.length == 3){
      numTxt = SINGLE[parseInt(num.charAt(0))-1]+ ' hundred '+hundredsCheck(num.substr(1));
    }
    else if(parseInt(num) == 1000){
      numTxt = 'One Thousand';
    }

    $('#ans').text(numTxt);
    });
});

function hundredsCheck(num){
  if(num === '00'){
    return '';
  }
  else if(parseInt(num)<10){
    return SINGLE[parseInt(num)-1]
  }
  else if(parseInt(num)<=19){
    return TEEN[parseInt(num)-10];
  }
  else{
    return LARGE[parseInt(num.charAt(0))-2]+ ' ' + SINGLE[parseInt(num.charAt(1))-1];
  }
}
