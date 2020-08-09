$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#nums').val().split(' ');
    var sorted =[];
    var rad = Math.sqrt(nums.length);

    for(var j=0; j<rad; j++){
      var temp=[];
      for(var k=0; k<rad; k++){
        temp.push(nums.shift());
      }
      sorted.push(temp);
    }
    console.log(sorted);
  });
});
