const testing = {
  "*": function(a,b){
    return a * b;
  },
  "/": function(a,b){
    return a / b;
  },
  "+": function(a,b){
    return a + b;
  },
  "-": function(a,b){
    return a - b;
  },
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let expresion = $("#exp").val().split(' ')
    $('#ans').text(calc(expresion));
  });
});

function calc(expresion){
  let sum = parseInt(expresion.shift());
  while(expresion.length > 0){
    let num = parseInt(expresion.shift());
    let exp = expresion.shift();
    if(!(exp in testing))
      return "Invalid operator"
    sum = testing[exp](sum,num);
  }
  return sum;
}
