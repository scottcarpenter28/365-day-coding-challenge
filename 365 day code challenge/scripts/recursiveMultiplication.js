$(document).ready(function() {
  $("#output").click(function() {
    var val1= parseInt($('#val1').val());
    var val2= parseInt($('#val2').val());

    if(val1==0 || val2==0)
      $('#ans').text(0);
    else if(val1<0 || val2<0){
      //abs of nums, check to see if resualt should be positive or negative
      if(val1 <0 && val2<0)
        $('#ans').text(recursiveProduct(Math.abs(val1),Math.abs(val2)));
      else
        $('#ans').text('-'+recursiveProduct(Math.abs(val1),Math.abs(val2)));
    }
    else{
      $('#ans').text(recursiveProduct(val1,val2));
    }

  });
});

function recursiveProduct(val, amt){
  if(amt<=1)
    return val;
  else return val+recursiveProduct(val,amt-1);
}
