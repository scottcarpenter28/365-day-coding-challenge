$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var str = $('#str').val().toLowerCase();

      while(str.includes('#') && str.indexOf('#')!=0 && (/[a-z]/gi).test(str)){
        for(var i=1; i<str.length; i++){
          if(str.charAt(i)=='#' && str.charAt(i-1)!=='#'){
            str=str.substring(0,i-1)+str.substring(i+1);
          }
        }
      }

      if(!(/[a-z]/gi).test(str))
        str='';
        
      $('#ans').text(str);
  });
});
