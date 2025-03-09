function gameLoop() {
    Zombies += Math.floor(Tick / 20)+1;
    Tick += 1;
    let damage = calculateDamage();
    killZombie(damage);
    if (Zombies > Defence) {
        Health -= Zombies - Defence;
    }
    if (Health <= 0) {
        ExpTotal += Exp/10;
        openmenu();

    }
    
    updateUI();

  }


window.onload = function() {
    openmenu();
}

setInterval(function() {
    if (Health > 0 & Running == true) {
        gameLoop();
    }
}, 1000);

  

