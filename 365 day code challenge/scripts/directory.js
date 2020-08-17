var directory = [];

$(document).ready(function() {
  $("#output").click(function() {
    var phone = $('#phone').val().match(/\d{3}-\d{3}-\d{4}/g).toString();
    var name = $('#name').val();
    var address = $('#address').val();
    directory.push(phone+', '+name +', '+address+'\n');
    console.log(directory.toString());
  });

  $('#search').click(function(){
      var sbox = $('#sBox').val()
      var res = search(sbox);
      if(res.length==0)
        $('#ans').text("No results");
      else
        $('#ans').text(res.toString());
  });
});

function search(s){
  var res=[];
  for( var i=0; i< directory.length;i++){
    if(directory[i].includes(s)){
            res.push(directory[i])
    }
  }
  return res;
}
