$(document).ready(function(){
    // Get value on button click and show alert
    $("#output").click(function(){
        var str = $("#string").val();
        var count=0;
        for(var i=0; i<str.length; i++){
          if(str.charAt(i)=='A'  || str.charAt(i)=='a' || str.charAt(i)=='E' || str.charAt(i)=='e' ||
          str.charAt(i)=='I' || str.charAt(i)=='i' || str.charAt(i)=='O' || str.charAt(i)=='o' || str.charAt(i)=='U' || str.charAt(i)=='u'){
            count++;
          }
        }
        $("#total").text(count);
    });
});
