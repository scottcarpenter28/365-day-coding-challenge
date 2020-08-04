$(document).ready(function() {
  $("#output").click(function() {
      var year = parseInt($('#year').val());
      var cent=1;
      var test=100;

      while(year > test){
        cent+=1;
        test+=100;
      }

        var last=cent.toString().charAt(cent.toString().length-1);
        console.log(last);
        if(last ==0  || last ==4  ||last ==5  ||last ==6  ||last ==7  || last ==8  ||last ==9)
          $('#century').text(cent+'th century');
        else if(last==1)
          $('#century').text(cent+'st century');
        else if(last==2)
          $('#century').text(cent+'nd century');
        else if(last==3)
          $('#century').text(cent+'rd century');

    });
});
//1st 2nd 3rd 4th 5th 6th 7th 8th 9th 0th
