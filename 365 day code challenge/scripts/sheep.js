$(document).ready(function() {
      // Get value on button click and show alert
      $("#output").click(function() {
        var str ='';
          if ( parseInt($('#num').val()) > 0){
              for (var i = 1; i <= parseInt($('#num').val()); i++) {
                str += i+" sheep... ";
              }
              $('#sheep').text(str);
            }
          else
            $('#sheep').text("Number must be greater than 0");
          });
      });
