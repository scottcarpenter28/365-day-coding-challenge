$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let smallest =getSmallestNum()
    let parity = getParity(smallest);
    $('#ans').text("Smallest number: "+smallest+" Parity: "+parity);
  });
});

function getParity(num){
  if(Number.isInteger(num/2))
    return 'Even';
  return 'Odd';
}

function getSmallestNum(){
  return $('#nums').val()
    .split(", ")
    .map(num => parseInt(num))
    .sort((a,b)=> a>b? 1:-1)[0];
}
