$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var layers =parseInt($('#layers').val());
    var temp = parseFloat($("#temp").val());

    if(layers<=0)
      $('#ans').text("Layers must be a positive number")
    else{
      var ans = temp;
      for(var i=0; i<layers; i++)
              ans*=1.1;
      $('#ans').text(ans.toFixed(1));
    }
  });
});
