const deckCards = ["boy.jpg", "boy.jpg", "sponge.png", "sponge.png", "jerry.jpg", "jerry.jpg", "micky.jpg", "micky.jpg", "nobita.jpg", "nobita.jpg", "pika.jpg", "pika.jpg", "shinchan.jpg", "shinchan.jpg", "minion.jpg", "minion.jpg", "motu.png", "motu.png","ferb.png", "ferb.png", "oggy.png","oggy.png", "poppye.jpg", "poppye.jpg" ];
const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
const cong = document.getElementById("cong");
const level1=document.querySelector(".level-btn1");
const level2=document.querySelector(".level-btn2");
const level3=document.querySelector(".level-btn3");
const level4=document.querySelector(".level-btn4");
const movesCount = document.querySelector(".moves-counter");
let accur, time, x, minutes = 0, moves = 0, seconds = 0, timeStart = false ;
const timeCounter = document.querySelector(".timer");
level1.addEventListener('click',function() {
  level.style.display = "none";
  game.style.display= "flex";
  x=12
  startGame(x);
});
level2.addEventListener('click',function() {
  level.style.display = "none";
  game.style.display= "flex";
  x=16
  startGame(x);
});
level3.addEventListener('click',function() {
  level.style.display = "none";
  game.style.display= "flex";
  x=20
  startGame(x);
});
level4.addEventListener('click',function() {
  level.style.display = "none";
  game.style.display= "flex";
  x=24
  startGame(x);
});
function shuffle(array,x) {
  let currentIndex = x, temp, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
  }
  return array;
}
function startGame(x) {
  const shuffledDeck = shuffle(deckCards,x);
  for (let i = 0; i < x; i++) {
    const liTag = document.createElement('LI');
    liTag.classList.add('card');
    const addImage = document.createElement("IMG");
    liTag.appendChild(addImage);
    addImage.setAttribute("src", "img/" + shuffledDeck[i]);
    addImage.setAttribute("alt", "image of cards");
    deck.appendChild(liTag);
  }
}
function timer() {
  time = setInterval(function() {
    seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
    timeCounter.innerHTML = "<i class='time-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
  }, 1000);
}
function stopTime() {
  clearInterval(time);
}
function movesCounter() {
  movesCount.innerHTML ++;
  moves ++;
}
function Accuracy(x) {
  accur=100-((moves-x)/(x/2))*100;
}
function compareTwo() {
  if (opened.length === 2) {
      document.body.style.pointerEvents = "none";
  }
  if (opened.length === 2 && opened[0].src === opened[1].src) {
    match();
  } else if (opened.length === 2 && opened[0].src != opened[1].src) {
    noMatch();
  }
}
function match() {
  setTimeout(function() {
    opened[0].parentElement.classList.add("match");
    opened[1].parentElement.classList.add("match");
    matched.push(...opened);
    document.body.style.pointerEvents = "auto";
    winGame(x);
    opened = [];
  }, 600);
  movesCounter();
  Accuracy(x);
}
function noMatch() {
  setTimeout(function() {
    opened[0].parentElement.classList.remove("flip");
    opened[1].parentElement.classList.remove("flip");
    document.body.style.pointerEvents = "auto";
    opened = [];
  }, 700);
  movesCounter();
}
function winGame(x) {
  if (matched.length === x) {
    stopTime();
    AddStats();
    displayCong();
    Accuracy(x);
  }
}
function AddStats() {
  const stats = document.querySelector(".cong-content");
  for (let i = 1; i <= 3; i++) {
    const statsElement = document.createElement("p");
    statsElement.classList.add("stats");
    stats.appendChild(statsElement);
  }
  let p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Time Taken: " + minutes + " Minutes and " + seconds + " Seconds";
    p[1].innerHTML = "Moves Taken: " + moves;
    p[2].innerHTML = "Accuracy: " + accur + "%";
}
function displayCong() {
const congClose = document.getElementsByClassName("close")[0];
  cong.style.display= "block";
  congClose.onclick = function() {
    cong.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == cong) {
      cong.style.display = "none";
    }
  };
}
deck.addEventListener("click", function(evt) {
  if (evt.target.nodeName === "LI") {
    console.log(evt.target.nodeName + " Was clicked");
    if (timeStart === false) {
      timeStart = true;
      timer();
    }
    flipCard();
  }
  function flipCard() {
    evt.target.classList.add("flip");
    addToOpened();
  }
  function addToOpened() {
    if (opened.length === 0 || opened.length === 1) {
      opened.push(evt.target.firstElementChild);
    }
    compareTwo();
  }
});
