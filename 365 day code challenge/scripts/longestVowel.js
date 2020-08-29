$(document).ready(function() {
  $("#output").click(function() {
    var wrd = $('#wrd').val().toLowerCase().split(/[^aeio]/).filter(word => word!=='').sort(function(a,b){
      if(a.length>b.length)return a;
      else return b;
    }).reverse();
    console.log(wrd);
    $('#ans').text(wrd[0].length);
  });
});
