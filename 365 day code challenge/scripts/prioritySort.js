$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var arr = $('#arr').val().split(', ').map(n => parseInt(n)).sort(function(a, b) {return a - b;});
    var pair = $('#pair').val().split(', ').map(n => parseInt(n));

    if (pair.length !== 2 || arr.length < 1)
      $('#ans').text('Must have more then 1 number and 2 priority numbers.');
    else {
      for(var i=pair.length-1; i>=0; i--)
        arr= priority(pair[i],arr);
      $('#ans').text(arr);
    }

  });
});

function priority(num, arr){
  var index = arr.indexOf(num);
  if (index > -1) {
    arr.splice(index, 1);
    arr.unshift(num);
  }
  return arr;
}
