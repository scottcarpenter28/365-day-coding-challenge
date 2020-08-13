$(document).ready(function() {
  $("#output").click(function() {
    var set = $('#set').val().split(' ');
    var target = parseInt($('#target').val());
    if(set.length>2){
      var index1=-1, index2=-1;
      for(var i=0; i<set.length;i++){
        var temp=parseInt(set[i]);
        set.map((x,l)=>{(parseInt(x)+temp==target)? index2=l :false});
        if(index2!=-1){
          index1=i;
          i=set.length
        }
      }
      if(index1 ==-1 || index2==-1)
        $('#ans').text('No indexs found. Make sure 2 numbers in the set add to the target.');
      else
        $('#ans').text('Indexs '+index1+' and '+index2+' add to '+target);
    }
    else
    $('#ans').text('The set must contain at least 3 numbers.');
  });
});
