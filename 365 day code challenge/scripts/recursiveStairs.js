$(document).ready(function() {
  $("#output").click(function() {
    var stairs = parseInt($("#stairs").val());
    if (stairs > 0)
      console.log(positveStairs(stairs - 1, stairs));
    else if (stairs < 0)
      console.log(negativeStairs(stairs + 1, Math.abs(stairs)));
    else
      console.log("No stairs");
  });
});

function positveStairs(steps, length) {
  if (steps == 0) {
    var s = '';
    for (var i = 0; i < length; i++)
      s += '#';
    return s;
  }
  else {
    var s = '';
    for (var i = 0; i < length; i++) {
      if (i < steps)
        s += '_';
      else
        s += '#';
    }
    return s + '\n' + positveStairs(steps - 1, length);
  }
}

function negativeStairs(steps, length){
  if (steps == 0) {
    var s = '';
    for (var i = 0; i < length; i++){
        s+='#';
    }
    return s;
  }
  else {
    var s = '';
    for (var i = 0; i < length; i++) {
      if (i < length-Math.abs(steps))
        s += '#';
      else
        s += '_';
    }
    return s + '\n' + negativeStairs(steps + 1, length);
  }
}
