$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val();
    $('#ans').text(isAuto(nums));
  });
});

 function isAuto(nums){
   for(var i=0; i<nums.length; i++){
     var temp = nums.replaceAll(i,'x');
     var len = temp.match(/x/gi) == null? -1: temp.match(/x/gi).length;
     if(len != parseInt(nums.charAt(i)) &&
        (len ==-1 && nums.charAt(i) != 0))
        return 'false';
   }
   return 'true';
 }
