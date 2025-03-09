function gameLoop() {
    Zombies += Math.floor(Tick / 20)+1;
    Tick += 1;
    if (SentryTurrets > 0) {
        killZombie(SentryTurrets);
    }
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

  

