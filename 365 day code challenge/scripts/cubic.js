$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var cub = $('#num').val();
    var ans = '';
    if(cub.length<3)$('#ans').text('Must be at least 3 numbers');

    for(var i=0; i<cub.length;i+=3){
      if((i+3) <= cub.length)
        ans += cubicCheck(cub.substr(i,i+3));
      else
        ans += cubicCheck(cub.substr(i,ans.length));
    }
    $('#ans').text(ans);
    });
});

function cubicCheck(num){
  var before = parseInt(num);
  var after=0;
  for(var i=0; i<num.length; i++)
    after += Math.pow( parseInt( num.charAt(i)), 3);
  if(before==after)
    return num+" is cubic.\n";
  else
    return num+ " is not cubic \n";
}
