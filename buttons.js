document.getElementById('ShootZombie').addEventListener('click', function() {
    console.log('Zombie Shot');
    killZombie(1);
    updateUI();
  });


document.getElementById('SentryButton').addEventListener('click', function() {
    console.log('Sentrey Turret Deployed');
    if (Exp >= SentryTurretCost) {
        Exp -= 10;
        SentryTurrets += 1;
        newcost = upgradecost(SentryTurretBase, SentryTurrets);
        SentryTurretCost = newcost;

    }
    updateUI();
  });

document.getElementById('WoodenStakeButton').addEventListener('click', function() {
    console.log('Wooden Stake Deployed');
    if (Exp >= WoodenStakeCost) {
        Exp -= 10;
        WoodenStakes += 1;
        WoodenStakeCost += 5;
        Defence += 1;
    }
    updateUI();
  });

document.getElementById('StartButton').addEventListener('click', function() {
    
    console.log('Game Started');
    resetGame();
    Running = true;
    closemenu();
  });