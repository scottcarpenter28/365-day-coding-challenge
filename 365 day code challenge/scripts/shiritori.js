$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var arr = $('#str').val().split(', ');
      var c=0;
      while( arr[c].charAt(arr[c].length-1) === arr[c+1].charAt(0) && c<arr.length-2)
        c++;
      $('#ans').text((c+1)==arr.length-1);
  });
});
