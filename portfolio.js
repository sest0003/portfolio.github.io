const cards = document.getElementsByClassName("card");
let book1 = document.querySelector(".book1");
let book2 = document.querySelector(".book2");
let book3 = document.querySelector(".book3");
let book4 = document.querySelector(".book4");
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
let closeButtons = document.getElementsByClassName("closeButton");
let popups = [popup1, popup2, popup3, popup4, popup5];


setTimeout(function() {
heading.style.display = "block";
typewriter(heading, 100);
}, 1000);

setTimeout(function() {
  console.log("Rubrik");
 mediumText.style.display = "block";
  typewriter(mediumText, 100);
  console.log("Rubrik");
}, 1500);


setTimeout(function() {
         profileCard.classList.add('active');
}, 4900);

setTimeout(function() {
         repoText.classList.add('active');
}, 6000);

setTimeout(function() {
         repoText2.classList.add('active');
}, 7000);



setTimeout(function showImage() {
   wrapper.classList.add('active');
}, 7500);

profileCard.addEventListener("click", function() {
  profileCard.classList.toggle("big");

});

function typewriter(element, delay) {
  let text = element.innerHTML;
  let output = '';
  let j = 0;

  function typeNextCharacter() {
    if (j < text.length) {
      output += text.charAt(j);
      element.innerHTML = output;
      j++;
      setTimeout(typeNextCharacter, delay);
    }
  }

  typeNextCharacter();
}

//toogle() ska bara aktiveras när ett card är aktiverat.
let activeCard = null;

// Lägg till en klick-händelse för varje "card-link" element
for (const element of cards) {
  const card = element;
  card.addEventListener("click", function() {
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


// Pop windows and CARDS

function toggle(clickedCardId, card) {

//CARD1
  if (clickedCardId === "card1") {

   // Loopa igenom alla popups och ställ in display: none för de som inte är den aktiverade popupen
   popups.forEach(function(popup) {
        if (popup !== popup1) {
            popup.style.display = "none";
          } else{
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
  const elementRect = popupElement.getBoundingClientRect();
  const offset = window.pageYOffset || document.documentElement.scrollTop;

  const targetTop = elementRect.top + offset;
  const scrollOptions = {
    top: targetTop,
    behavior: "smooth"
  };

  window.scrollTo(scrollOptions);

  popupElement.classList.add("active");
}

//CloseButton
   function closeButton() {

     popups.forEach(function(popup) {
      popup.classList.remove("active");
     });

     activeCard.classList.remove("active");

     document.body.style.height = "auto"; // Återställ höjden på sidan till auto
     window.scrollTo({
       top: 0,
       behavior: "smooth" // Scrolla till toppen av sidan
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


