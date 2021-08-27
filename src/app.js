/* eslint-disable */
import "bootstrap";
import "./style.css";

// botones + eventlistener
let drawButton = document.querySelector(".drawBtn");
let sortButton = document.querySelector(".sortBtn");
drawButton.addEventListener("click", drawRandomCards);
sortButton.addEventListener("click", function() {
  selectionSort(cards);
});

// funcion cantidad de cartas aleatoria drawbutton
let inputAmount = document.querySelector(".amount");
let cards = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function drawRandomCards() {
  let amount = parseInt(inputAmount.value);
  for (let i = 0; i < amount; i++) {
    let newCard = document.createElement("div");
    let cardSuit = randomSuitGenerator();
    let cardNumber = randomNumberGenerator();
    newCard.classList.add("card", "number", cardSuit);
    newCard.setAttribute("style", "display:flex;");
    newCard.innerHTML = changeValue(cardNumber);
    let parent = document.querySelector(".cardsDiv");
    parent.append(newCard);
    cards.push({ cardSuit, cardNumber });
  }

  // funcion numero aleatorio para innerHTML
  function randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
  }

  // funcion pinta aleatoria para clase
  function randomSuitGenerator() {
    let suits = ["spade", "club", "diamond", "heart"];
    let randomSuits = Math.floor(Math.random() * suits.length);
    return suits[randomSuits];
  }
  console.log("this are the unsorted cards", cards);
}

// asignar valor cartas
function changeValue(value) {
  if (value === 1) return "A";
  if (value === 11) return "J";
  if (value === 12) return "Q";
  if (value === 13) return "K";
  return value;
}
// funcion orden de array para sortbutton

let parent = document.querySelector(".sortDiv");

const selectionSort = cards => {
  let min = 0;
  let count = 1;
  while (min < cards.length - 1) {
    let newRow = document.createElement("div");
    newRow.setAttribute("style", "display:flex");
    newRow.style.alignItems = "center";
    let rowNumber = document.createTextNode(`${count}`);
    newRow.append(rowNumber);
    for (let i = min + 1; i < cards.length; i++) {
      if (cards[min].cardNumber > cards[i].cardNumber) {
        parent.appendChild(newRow);
        let aux = cards[min];
        cards[min] = cards[i];
        cards[i] = aux;
      }
    }
    for (let i = 0; i < cards.length; i++) {
      let showCard = document.createElement("div");
      showCard.classList.add("card", "number", cards[i].cardSuit);
      showCard.setAttribute("style", "display:flex;");
      showCard.innerHTML = changeValue(cards[i].cardNumber);
      newRow.append(showCard);
    }
    count++;
    min++;
  }
  console.log(cards);
  return cards;
};
