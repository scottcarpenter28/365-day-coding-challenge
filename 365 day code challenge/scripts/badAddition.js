$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num1 = new stringNumber($('#num1').val());
    var num2 = new stringNumber($('#num2').val());
    var result = "";

    do {
      var val1 = parseInt(num1.getIndex())
      var val2 = parseInt(num2.getIndex())
      var sum = val1 + val2;
      result = sum+result;
    } while (num1.getPointer() >= 0 || num2.getPointer() >= 0)


    $('#ans').text(result)
  });
});

class stringNumber {
  constructor(num) {
    this.num = num;
    this.pointer = num.length - 1;
  }

  getIndex(){
    if(this.pointer == -1)
      return 0;
    var ret = this.num.charAt(this.pointer);
    this.pointer -= 1;
    return ret;
  }

  getPointer() {
    return this.pointer;
  }

}
