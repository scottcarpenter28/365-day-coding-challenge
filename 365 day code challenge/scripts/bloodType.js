$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var rType = $('#rType').val();
      var dType = $('#dType').val();

      if(dType==rType ||
         (dType=='O-') ||
         (dType=='O+' && rType.includes('+')) ||
         (rType=='AB+' && (rType.includes('A') || rType.includes('B') )))
        $('#ans').text('True');
      else
        $('#ans').text('False');
  });
});
