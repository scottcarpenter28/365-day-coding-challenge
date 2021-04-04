$(document).ready(function() {
  // Get value on button click and show alert
  $("#entries").click(function() {
    var input = getObject();
    var result = [];
    for(key in input)
      result.push([key, input[key]])
    console.log("Key Value pairs");
    console.table(result)
  });

  $("#values").click(function() {
    var input = getObject();
    var result = [];
    for(key in input)
      result.push(input[key]);
    console.log("Values");
    console.table(result);
  });
});

function getObject(){
  var obj = $('#object').val()
  return JSON.parse(obj);
}
