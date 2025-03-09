function updateUI() {

    let damage = calculateDamage();
    console.log('Updating UI');

    updateSprites('ZombieSprites', Zombies, 'zombie-sprite');
    updateSprites('SentrySprites', SentryTurrets, 'sentry-sprite');
    updateSprites('WoodenStakeSprites', WoodenStakes, 'stake-sprite');

    document.getElementById('Zombies').textContent = 'The Horde - Zombies: ' + Zombies + '   (' + (Math.floor(Tick / 20)+1) + '/s)';  ;
    document.getElementById('Defences').textContent = 'Your Defences (Holds ' + Defence + ' Zombies)';
    document.getElementById('Offence').textContent = 'Your Offence ('+damage+' Damage/s)';
    document.getElementById('statbar').textContent = 'Run Time ⌛: ' + Tick +'   |   Health ❤️: ' + Health +'    |    Experience ✨: ' + Exp +' ';
    document.getElementById('SentryTurrets').textContent = 'Owned: ' + SentryTurrets 
    document.getElementById('SentryCost').textContent = 'Cost: ' + SentryTurretCost;
    document.getElementById('ExpTotal').textContent = 'Exp Total: ' + ExpTotal;
  }


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the default tab (Offensive Upgrades) on page load
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.tab button').click();
});