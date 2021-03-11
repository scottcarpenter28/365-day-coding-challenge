$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var nums = $('#nums').val().split(',').map(n=> parseInt(n));
    result=[]
    nums.forEach((num,index) =>{
      if(index > 0 && num-1 != nums[index-1])
        result.push({'i':index,'n':num});
    })
    console.log(result)
  });
});
