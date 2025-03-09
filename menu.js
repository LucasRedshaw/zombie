// Get the pop-up card
var popupCard = document.getElementById("popupCard");


// Get the <span> element that closes the pop-up card
var span = document.getElementById("closePopup");

// When the user clicks the button, open the pop-up card

function openmenu() {
  popupCard.style.display = "block";
}

function closemenu() {
  popupCard.style.display = "none";
}

// When the user clicks on <span> (x), close the pop-up card
span.onclick = function() {
  popupCard.style.display = "none";
}



// When the user clicks anywhere outside of the pop-up card, close it
window.onclick = function(event) {
  if (event.target == popupCard) {
    popupCard.style.display = "none";
  }
}