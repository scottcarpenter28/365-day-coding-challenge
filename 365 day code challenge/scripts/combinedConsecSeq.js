$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let nums1 = $('#nums1').val()
      .split(', ')
      .map(n => parseInt(n));

    let nums2 = $('#nums2').val()
      .split(', ')
      .map(n => parseInt(n));

    let combined = nums1.concat(nums2);
    combined = combined.sort();

    let isConsec = combined.every((cur, i) =>{
      let next = cur+1;
      if(next == combined[i+1] || (i+1) > combined.length-1)
        return true;
      return false;
    })

    $('#ans').text(isConsec);
  });
});
