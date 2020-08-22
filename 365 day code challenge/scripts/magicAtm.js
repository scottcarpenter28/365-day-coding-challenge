$(document).ready(function() {
  $("#output").click(function() {
    var atms = $('#atms').val().split(' ');
    var transfer=[];

    for(var i=0; i<atms.length;i++)
      transfer.push(parseInt(atms[i]));

    var largest=0;
    var v1, v2;
    for(var i=0; i<transfer.length; i++){
      for(var k=transfer.length-1; k>i; k--){
        var total = transfer[i]+transfer[k]+(k-i);
        if(total>largest){
           v1 = i;
           v2 = k;
           largest = total;
         }
      }
    }
    console.log('Total: $'+largest+' Atms '+v1+' '+v2+'.');
    $('#ans').text('Total: $'+largest+' Atms '+v1+' '+v2+'.')
  });
});
