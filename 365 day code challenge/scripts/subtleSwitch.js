$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $("#str").val().split(' ');
    for(var i=0; i<str.length; i++){
      if(str[i].indexOf('nts')>=0)
        str[i]=str[i].substring(0,str[i].indexOf('nts'))+'nce'+str[i].substring(str[i].indexOf('nts')+3);
      else if(str[i].indexOf('nce')>=0)
        str[i]=str[i].substring(0,str[i].indexOf('nce'))+'nts'+str[i].substring(str[i].indexOf('nce')+3);
    }
    $('#ans').text(str.join(' '));
  });
});
