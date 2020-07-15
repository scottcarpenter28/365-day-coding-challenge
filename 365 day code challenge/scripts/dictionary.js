var arr = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry','stars', 'mars', 'wars', 'codec', 'codewars','javascript', 'java', 'ruby', 'php', 'python', 'coffeescript'];
console.log(arr.join(', '));

$(document).ready(function() {
  $("#output").click(function() {
      var wrd = $('#wrd').val();
      var returnWrd = "";
      for(var i=0; i<arr.length;i++){
        for(var k=1; k<wrd.length;k++){
          if(arr[i].includes(wrd.substr(0,i))){
            returnWrd =arr[i];
          }
        }
      }
      $('#spellCheck').text(returnWrd);
    });
});
