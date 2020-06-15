$(document).ready(function(){
    // Get value on button click and show alert
    $("#output").click(function(){
        var str = $("#string").val();
        if(str.length>2){
          var newstr = str.slice(1,str.length-1);
          $("#outputString").text("Output : "+newstr);
        }
      else {
        $("#outputString").text("Output : String needs to be longer than 2 characters");
      }
    });
});
