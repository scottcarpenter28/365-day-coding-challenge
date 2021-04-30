$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let num = parseInt($("#num").val());
    bigNum = BigInt(Math.pow(2,num))
    let result = "Crisis Averted";
    let index = bigNum.toString().indexOf('666')
    if(index !=-1)
      result = `Repent! ${index} days until the Apocalypse!`
    $('#ans').text(result);
  });
});
