$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#numbers').val().split(' ').map(val =>parseInt(val));
    var group = parseInt($('#group').val());
    if(nums.length<1 || nums<1)
      console.log('Must be more than one number and must be greater than or equal to 1 in a group.');
    else{
      var res =[];
      var c=0;
      var temp=[];

      while(nums.length>0){
        if(temp.length>=group){
          res.push(temp);
          temp=[];
        }
        temp.push(nums.shift());
      }
      
      res.push(temp);
      console.table(res);
    }
  });
});
