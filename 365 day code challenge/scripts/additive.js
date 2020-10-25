$(document).ready(function() {
  $("#output").click(function() {
    var num = $('#num').val().split('').map(i => parseInt(i));
    var count=0;
    while(num.toString().length>1){
      var temp=0;
      num.forEach(i =>temp+=i);
      num=temp.toString().split('').map(i => parseInt(i));
      count++;
    }
    $('#ans').text(count );
  });

  $("#mult").click(function() {
    var num = $('#num').val().split('').map(i => parseInt(i));
    var count=0;
    while(num.toString().length>1){
      var temp=1;
      num.forEach(i =>temp*=i);
      num=temp.toString().split('').map(i => parseInt(i));
      count++;
    }
    $('#ans').text(count );
  });

});
