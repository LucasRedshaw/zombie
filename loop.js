function gameLoop() {
    Zombies += Math.floor(Tick / 20)+1;
    Tick += 1;
    let damage = calculateDamage();
    Defence = calculateDefence();
    killZombie(damage);
    if (Zombies > Defence) {
        Health -= Zombies - Defence;
    }
    if (Health <= 0) {
        ExpTotal = Math.floor(Exp / 10) + Math.floor(ExpTotal);  
        saveGame();
        openmenu();
        if (Tick > LongestRun) {
            LongestRun = Tick;
        }
    }
    updateUI();
  }


window.onload = function() {
    loadGame();
    openmenu();
}

setInterval(function() {
    if (Health > 0 & Running == true) {
        gameLoop();
    }
}, 1000);

  

