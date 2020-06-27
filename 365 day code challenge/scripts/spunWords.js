$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val()
    var arr = str.split(' ');

    for(var i=0; i<arr.length; i++){
      if(arr[i].length>=5)
        arr[i] = reverse(arr[i]);
    }
    
    $('#rev').text(arr.join(" "));
  });
});

function reverse(s){
  var rev = '';
  for(var i=s.length-1; i>=0;i--){
    rev += s.charAt(i);
  }
  return rev;
}
