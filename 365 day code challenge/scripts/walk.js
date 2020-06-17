var time;
var path = [];

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    time = $('#time').val();
    if(time%2 !==0 || time<=2){
      $('#path').text("Must be an even number greater than 2.");
    }
    else{
      generate();
      $('#path').text(path.toString());
    }
  });
});


function generate(){
  path=[];
  var halfTime = time/2;
  //Going forward
  for(var i=0; i<time; i++){
    var d = Math.floor(Math.random()*4);
    if(d===0) path.push('N');
    else if(d===1)path.push('E');
    else if(d===3)path.push('S');
    else path.push('W')
  }
  path.push("Turn Around\n")
  //reverse
  for(var i=path.length-2; i>=0; i--){
    if(path[i]==='N') path.push('S');
    else if(path[i]==='E')path.push('W');
    else if(path[i]==='S')path.push('N');
    else path.push('E');
  }
}
