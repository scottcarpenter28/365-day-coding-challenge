var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num<2 || num>97)
      $('#ans').text('Number must lay between 2 and 97');
    else
      $('#ans').text(binarySearch(num));
  });
});

function binarySearch(num){
  var min=0;
  var max=primes.length-1;
  var avg = Math.ceil(max/2);

  while(min!=max){
    //If found to be at mid point
    console.log(primes[avg]+' min '+primes[min]+' max '+primes[max]);
    if(primes[avg]==num || primes[min]==num || primes[max]==num)
      return('Yes');
    else{
      //Lower Half of the array
      if(num<primes[avg]){
          max=avg-1;
          avg= Math.ceil(max/2);
      }
      //Upper half of the array
      else{
        min=avg+1;
        avg=Math.ceil((max-min)/2)+min;
      }
    }
  }
  return("No");
}
