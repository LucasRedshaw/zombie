
function killZombie(qty) {
    if (Zombies >= qty) {
        Zombies -= qty;
        Exp += qty;
        TotalZombieKills += qty;
    }
    else { 
        Exp += Zombies;
        TotalZombieKills += Zombies;
        Zombies = 0;
    }
    
    updateUI();
}

function resetGame() {
    Zombies = 0;
    Exp = 0;
    Tick = 0;
    SentryTurrets = PermanentSentryTurrets;
    SentryTurretCost = 10;
    Health = 100;
    Defence = 0;
    WoodenStakes = 5;
    WoodenStakeCost = 10;
    Running = false;
    updateUI();
}

function upgradecost(cost, owned) {
    let newcost = cost * 2**owned;
    return newcost;
}

function calculateDamage() {
    let damage = 0;
    damage += SentryTurrets * 1;
    return damage;
}

function calculateDefence() {
    let defence = 0;
    defence += WoodenStakes;
    return defence;
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.innerText = message;
    popup.style.position = 'fixed';
    popup.style.top = '300px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = 'rgba(0, 0, 0, 0.7)';
    popup.style.color = '#fff';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    popup.style.opacity = '1';
    popup.style.transition = 'opacity 4s ease, top 4s ease';
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.style.top = '0px';
      popup.style.opacity = '0';
    }, 100);
  
    setTimeout(() => {
      popup.remove();
    }, 2100);
  }