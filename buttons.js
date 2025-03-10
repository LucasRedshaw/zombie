document.getElementById('ShootZombie').addEventListener('click', function() {
    console.log('Zombie Shot');
    let damage;
    if (TougherBullets > 0) {
      damage = Math.pow(2, TougherBullets);
    } else {
      damage = 1;
    }
    killZombie(damage);
    updateUI();
  });


document.getElementById('SentryButton').addEventListener('click', function() {
    console.log('Sentrey Turret Deployed');
    if (Exp >= SentryTurretCost) {
        Exp -= SentryTurretCost;
        SentryTurrets += 1;
        newcost = upgradecost(SentryTurretBase, SentryTurrets);
        SentryTurretCost = newcost;

    }
    updateUI();
  });

document.getElementById('PermanentSentryButton').addEventListener('click', function() {
    console.log('Permanent Sentry Turret Deployed');
    if (ExpTotal >= PermanentSentryTurretCost) {
        ExpTotal -= PermanentSentryTurretCost;
        PermanentSentryTurrets += 1;
        newcost = upgradecost(PermanentSentryTurretBase, PermanentSentryTurrets);
        PermanentSentryTurretCost = newcost;
    }
    updateUI();
  });

document.getElementById('WoodenStakeButton').addEventListener('click', function() {
    console.log('Wooden Stake Deployed');
    if (Exp >= WoodenStakeCost) {
        Exp -= WoodenStakeCost;
        WoodenStakes += 1;
        newcost = upgradecost(WoodenStakeBase, WoodenStakes);
        WoodenStakeCost = newcost;
    }
    updateUI();
  });

document.getElementById('TougherBulletsButton').addEventListener('click', function() {
  console.log('Tougher Bullets Purchased');
  if (ExpTotal >= TougherBulletsCost) {
      ExpTotal -= TougherBulletsCost;
      TougherBullets += 1;
      console.log(TougherBullets);
      newcost = upgradecost(TougherBulletsBase, TougherBullets);
      TougherBulletsCost = newcost;
  } 
  updateUI();
});

document.getElementById('StartButton').addEventListener('click', function() {
    
    console.log('Game Started');
    resetGame();
    Running = true;
    closemenu();
  });