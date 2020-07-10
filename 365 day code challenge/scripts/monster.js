$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var heroHealth = parseInt($('#heroHealth').val());
    var monsterHealth = parseInt($('#monsterHealth').val());
    var monsterAttack = parseInt($('#monsterAttack').val());

    var hits = Math.floor((monsterHealth-1) / 3);
    var damage = Math.floor(hits * monsterAttack);
    var afterHealth = heroHealth - damage;


    if (afterHealth > 0) {
      $('#results').text('Hits: ' + hits + ' Damage: ' + damage + ' health: ' + afterHealth);
    } else {
      $('#results').text("Hero died");
    }

  });
});
