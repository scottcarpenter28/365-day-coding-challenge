$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let weights = $('#weights').val()
      .split(', ')
      .map(w => parseFloat(w));
    console.table(packBoxes(weights));
  });
});

function packBoxes(weights){
  let allBoxes = [];
  let curBox = [];

  while(weights.length > 0){
    let weight = weights.shift();
    if(curWeight(curBox) + weight <= 10)
      curBox.push(weight);
    else{
      allBoxes.push(curBox);
      curBox = [weight];
    }
  }
  
  allBoxes.push(curBox);
  return allBoxes;
}

function curWeight(box){
  if(box.length == 0)
    return 0;
  return box.reduce((acc, w) => acc + w);
}
