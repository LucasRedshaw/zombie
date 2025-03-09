function updateSprites(containerId, spriteCount, spriteClass) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`${containerId} container not found!`);
      return;
    }
    
    // Force a single-line layout using flexbox.
    container.style.display = 'flex';
    container.style.flexWrap = 'nowrap';
    container.style.overflowX = 'auto'; // Allow horizontal scrolling if needed
  
    // Clear existing sprites
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
  
    if (spriteCount < 10) {
      // Create individual sprites
      for (let i = 0; i < spriteCount; i++) {
        const sprite = document.createElement('div');
        sprite.className = spriteClass;
        fragment.appendChild(sprite);
      }
    } else {
      // Create condensed sprites for complete groups of 10
      const groups = Math.floor(spriteCount / 10);
      const remainder = spriteCount % 10;
      
      for (let i = 0; i < groups; i++) {
        const condensedSprite = document.createElement('div');
        condensedSprite.classList.add(spriteClass, 'condensed');
        condensedSprite.innerText = '10';
        fragment.appendChild(condensedSprite);
      }
      
      // Create individual sprites for the remainder
      for (let i = 0; i < remainder; i++) {
        const sprite = document.createElement('div');
        sprite.className = spriteClass;
        fragment.appendChild(sprite);
      }
    }
    
    container.appendChild(fragment);
  }
  