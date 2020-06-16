var balanced;
var startingTotal;
var totalExpense = 0;
var checkBookLength;

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    balanced ='';
    var checkBook = $("#checkBook").val();
    var lines = $('#checkBook').val().split('\n');
    for (var i = 0; i < lines.length; i++) {
      var cleaned = '';
      if(i===0){
        startingTotal=cleaned;
        startingTotal=lines[i];
        balanced += "Original_Balance: "+startingTotal +'\n';
        checkBookLength = lines.length-1;
      }
      else{
        var indexOf = lines[i].lastIndexOf(' ');
        totalExpense +=Math.round(lines[i].substr(indexOf, lines[i].length) * 100)/100;
        startingTotal -= lines[i].substr(indexOf, lines[i].length);
        startingTotal = Math.round(startingTotal * 100)/100;
        balanced += lines[i]+" Blance: " + startingTotal.toFixed(2)+'\n';
      }

    }
    balanced += "Total expenses: "+totalExpense.toFixed(2) + '\n';
    balanced += "Average expenses: " + (totalExpense/checkBookLength).toFixed(2) + '\n';
    $('#balanced').text(balanced);
    console.log(balanced);
  });
});
