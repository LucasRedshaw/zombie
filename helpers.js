
function killZombie(qty) {
    if (Zombies >= qty) {
        Zombies -= qty;
        Exp += qty;
    }
    else { 
        Exp += Zombies;
        Zombies = 0;
    }
    updateUI();
}

function resetGame() {
    Zombies = 0;
    Exp = 0;
    Tick = 0;
    SentryTurrets = 0;
    SentryTurretCost = 10;
    Health = 100;
    Defence = 5;
    WoodenStakes = 0;
    WoodenStakeCost = 10;
    Running = false;
    updateUI();
}

function upgradecost(cost, owned) {
    let newcost = cost * 2**owned;
    return newcost;
}