var arr ;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var n = $('#nth').val();
    arr = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

    for(var i=0; i<n; i++){
      var temp = arr.shift();
      arr.push(temp);
      arr.push(temp);
    }
    //Debug
    //console.log(arr.toString());
    $('#ans').text(arr[0]);
    });
});
