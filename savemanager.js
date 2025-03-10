function saveGame() {
    const state = {
        ExpTotal,
        TougherBullets,
        LongestRun,
        TotalZombieKills

    };
    localStorage.setItem("gameState", JSON.stringify(state));
    console.log("Game saved.");
    showPopup("Game saved");
  }
  
  function delGame() {
    localStorage.removeItem("gameState");
    console.log("Game save deleted.");
    showPopup("Save deleted");
    location.reload();
  }
  
  function loadGame() {
    const stateStr = localStorage.getItem("gameState");
    if (stateStr) {
      const state = JSON.parse(stateStr);
      ExpTotal = state.ExpTotal !== undefined ? state.ExpTotal : 0;
      TougherBullets = state.TougherBullets !== undefined ? state.TougherBullets : 0;
      LongestRun = state.LongestRun !== undefined ? state.LongestRun : 0;
      TotalZombieKills = state.TotalZombieKills !== undefined ? state.TotalZombieKills : 0;
      updateUI();
      console.log("Game loaded. ExpTotal: " + ExpTotal + " TougherBullets: " + TougherBullets);
      showPopup("Game loaded");
    } else {
      console.log("No saved game found.");
      showPopup("No saved game found.");
    }
  }