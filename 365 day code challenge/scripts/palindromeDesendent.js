$(document).ready(function() {
  $("#output").click(function() {
    var nums = $('#nums').val().split('').map(item => Math.abs(parseInt(item)));
    var ans=findDesendent(nums);
     console.log(ans);
  });
});

function findDesendent(nums){
  if(nums.length==2){
    if(nums.join('')==nums.reverse().join(''))
      return true;
    else
      return false;
  }

  else{
    var res=[];
    while(nums.length>=1)
       res.push(nums.shift()+nums.shift());
    if(res==res.reverse())
      return true;
    else
      return findDesendent(res);
  }
}
