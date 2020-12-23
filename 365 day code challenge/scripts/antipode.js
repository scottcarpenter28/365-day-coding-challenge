$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var arr = $('#nums').val().split(', ').map(n =>parseInt(n));
      var h1 = arr.slice(0,Math.floor((arr.length-1)/2)+1);
      var h2 = arr.slice(Math.floor((arr.length-1)/2)+1,arr.length).reverse();
      for(var i=0; i<h1.length&&i<h2.length;i++)
        h1[i]= h1[i]+h2[i];
      $('#ans').text(h1.slice(0,h2.length).map(n=>n/2));
  });
});
