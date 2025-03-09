function updateUI() {
    console.log('Updating UI');
    document.getElementById('Zombies').textContent = 'Zombies: ' + Zombies + ' / ' + Defence   ;
    document.getElementById('Exp').textContent = 'Exp: ' + Exp;
    document.getElementById('SentryTurrets').textContent = 'Sentrey Turrets: ' + SentryTurrets;
    document.getElementById('SentryButton').textContent = 'Buy Sentry Turret + ' + SentryTurretCost;
    document.getElementById('ZombiesPerTick').textContent = 'Zombies Per Second: ' + (Math.floor(Tick / 20)+1);
    document.getElementById('Health').textContent = 'Health: ' + Health;
    document.getElementById('ExpTotal').textContent = 'Exp Total: ' + ExpTotal;
    document.getElementById('RunTime').textContent = 'Run Time ' + Tick + 's';
  }