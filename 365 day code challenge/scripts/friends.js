var friendList = [];

$(document).ready(function() {
  $("#output").click(function() {
    friendList.push([$('#lName').val().toUpperCase(), $('#fName').val().toUpperCase()]);

    friendList.sort();
    $('#ans').text(printList());
  });
});

function printList(){
  var str='';
  for(var i=0; i<friendList.length; i++)
    str += '['+ friendList[i].toString()+']';
  return str;
}
