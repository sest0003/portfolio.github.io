const cards = document.getElementsByClassName("card");

const wrapper = document.querySelector(".wrapper");
const bookShelf = document.getElementById("bookShelf");
const heading = document.querySelector(".heading-text");
let repoText = document.querySelector(".repo-text");
let repoText2 = document.querySelector(".repo-text2");
let mediumText = document.querySelector(".medium-text");
let profileCard = document.getElementById('profile');
let profilePic = document.querySelector('.profile-picture');
let text = document.querySelector(".text");
let images = document.querySelector(".container");
let bodyElement = document.querySelector('body');
let blur = document.querySelector("#blur");
let popup = document.querySelector(".popup");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");
const popup5 = document.getElementById("popup5");
const popup6 = document.getElementById("popup6");
const popup7 = document.getElementById("popup-profile");
const popup8 = document.getElementById("popup8");
const popup9 = document.getElementById("popup9");
let closeButtons = document.getElementsByClassName("closeButton");
let popups = [popup1, popup2, popup3, popup4, popup5, popup6, popup7, popup8, popup9];  







//toogle() ska bara aktiveras när ett card är aktiverat.
let activeCard = null;

// Lägg till en klick-händelse för varje "card-link" element
for (const element of cards) {
  const card = element;
  card.addEventListener("click", function(e) {
    e.preventDefault(); // Förhindra att länken följs
    if (card.classList.contains("active")) {
      toggle(card.id, card); // Anropa toggle-funktionen när klickade kortet är aktivt
    } else {
      if (activeCard) {
        activeCard.classList.remove("active");
      }
      card.classList.add("active");
      activeCard = card;
    }
  });
}

// Lägg till efter den befintliga card-lyssnaren
const cardProfile = document.getElementById('card-profile');
if (cardProfile) {
    cardProfile.addEventListener("click", function() {
        if (activeCard) {
            activeCard.classList.remove("active");
        }
        cardProfile.classList.add("active");
        activeCard = cardProfile;
        toggle('card-profile', cardProfile);
    });
}

// Pop windows and CARDS

function toggle(clickedCardId, card) {
    //CARD1
    if (clickedCardId === "card1") {
        popups.forEach(function(popup) {
            if (popup !== popup1) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup1);
    }
    //CARD2
    else if (clickedCardId === "card2") {
        popups.forEach(function(popup) {
            if (popup !== popup2) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup2);
    }
    //CARD3
    else if (clickedCardId === "card3") {
        popups.forEach(function(popup) {
            if (popup !== popup3) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup3);
    }
    //Card 4
    else if (clickedCardId === "card4") {
        popups.forEach(function(popup) {
            if (popup !== popup4) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup4);
    }
    //CARD 5
    else if (clickedCardId === "card5") {
        popups.forEach(function(popup) {
            if (popup !== popup5) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup5);
    }
    //CARD 6
    else if (clickedCardId === "card6") {
        popups.forEach(function(popup) {
            if (popup !== popup6) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup6);
    }   
    //CARD 7
    else if (clickedCardId === "card7") {
        popups.forEach(function(popup) {
            if (popup !== popup8) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup8);
    }
    // Profile card
    else if (clickedCardId === "card-profile") {
        popups.forEach(function(popup) {
            if (popup !== popup7) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup7);
    }
    //CARD 8
    else if (clickedCardId === "card8") {
        popups.forEach(function(popup) {
            if (popup !== popup9) {
                popup.style.display = "none";
            } else {
                popup.style.display = "block";
            }
        });
        scroll(popup9);
    }
}

// closeButton

function closePopups() {
  popups.forEach(function(popup) {
   popup.classList.remove("active");
  });

  activeCard.classList.remove("active");

  document.body.style.height = "auto"; // Återställ höjden på sidan till auto
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Scrolla till toppen av sidan
  });
}


//Scroll to view and show popup
function scroll(popupElement) {
  // Hitta alla wrappers
  const wrappers = document.querySelectorAll('.wrapper');
  
  // Dölj wrappers
  wrappers.forEach(wrapper => {
    wrapper.style.display = 'none';
  });

  // Aktivera popup
  popupElement.classList.add("active");
  popupElement.style.position = 'relative';
  popupElement.style.top = '0';
  
  // Scrolla till toppen
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//CloseButton
   function closeButton() {
     // Visa wrappers igen
     const wrappers = document.querySelectorAll('.wrapper');
     wrappers.forEach(wrapper => {
       wrapper.style.display = 'flex';
     });

     popups.forEach(function(popup) {
      popup.classList.remove("active");
     });

     activeCard.classList.remove("active");

     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
    console.log("closeButton har klickats på!");
}

// Lägg till klickhanterare för varje closeButton-element
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", closeButton);
}

//header-Clicks
const card1 = document.getElementById("card1");
const card5 = document.getElementById("card5");

function projectClick() {
 if (card1.classList.contains("active")) {
card1.classList.remove("active");
} else {
card1.classList.add("active");}
console.log("p-click!");
}



function certifClick() {
 if (card5.classList.contains("active")) {
card5.classList.remove("active");
}else {
card5.classList.add("active");}
console.log("C-click!");
}


