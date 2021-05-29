$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let input = $('#input').val();
    input = JSON.parse(input);

    let items = input["items"];
    let money = input["money"];
    money = removeDollar(money);

    let bought = [];

    for(key in items){
      let price = removeDollar(items[key]);
      if(price < money){
        bought.push(key);
        money -= price;
      }
    }

    if(bought.length == 0)
      bought.push("Nothing")
    $('#ans').text(bought.sort());
  });
});

function removeDollar(str){
  str = str.replace('$',"");
  str = str.replace(',','');
  return parseFloat(str);
}
