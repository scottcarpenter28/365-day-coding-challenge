$(document).ready(function() {
  $("#output").click(function() {
    var arr = $('#arr').val().split(' ').map( val => parseInt(val)).sort(function(a,b){return a - b});
    var n = parseInt($('#high').val());
    var min =0;
    var count=0;

      if(n>0){
      while(count<n){
        console.log(arr);
        count+=arr.pop();
        min++;
      }
    }

    else{
      while(count>n){
        count+=arr.shift();
        min++;
      }
    }

    if(count>n || count<n)
      $('#ans').text(min);
    else
      $('#ans').text(-1);
  });
});
