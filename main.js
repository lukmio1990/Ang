const word = document.querySelector(".word h1");
const result = document.querySelector(".number");
const comment = document.querySelector(".comment");
const scoreWindow = document.querySelector(".score");
const contentBtn = document.querySelector(".btn-start p");
const btnStartIcon = document.querySelector(".circle-start i");
//pobieranie inputów
const wordOne = document.querySelector("input#wordOne");
const wordTwo = document.querySelector("input#wordTwo");
const wordThree = document.querySelector("input#wordThree");
const inputs = document.querySelectorAll("input");
//label
const labels = document.querySelectorAll("label");
//button
const btnStart = document.querySelector(".btn-start");
const btnCheck = document.querySelector(".btn-check");
const btnNext = document.querySelector(".btn-next");
// rozwiązanie
const solOne = document.querySelector("#one");
const solTwo = document.querySelector("#two");
const solThree = document.querySelector("#three");

let score = 0;
let task;
let game = 0;
let start = false;
let flag = false;

btnStart.addEventListener("click", () => {
  contentBtn.textContent = "Reset";
  btnStartIcon.className = "fas fa-forward";
  word.classList.add("active");
  result.classList.add("active");
  scoreWindow.classList.add("active");
  solOne.classList.add("active");
  solTwo.classList.add("active");
  solThree.classList.add("active");
});

let pl = [
  "Być",
  "Zostać",
  "Zaczynać",
  "Złamać",
  "Przynieść",
  "Budować",
  "Kupować",
  "Móc",
  "Łapać/chwytać",
  "Wybrać",
  "Przyjść",
  "Kosztować",
  "Ciąć/odciąć/przyciąć",
  "Robić",
  "Pić",
  "Prowadzić",
  "Jeść",
  "spaść",
  "Czuć",
  "Walczyć",
  "Znaleźć",
  "Latać",
  "Zapomnieć",
  "Dostać/otrzymać",
  "Dać",
  "Pójść/pojechać",
  "Rosnąć",
  "Mieć",
  "Słyszeć/słuchać",
  "Trafić/uderzyć",
  "Trzymać",
  "Wiedzieć",
  "Dowiedzieć/uczyć",
  "Opuścić/wyjść/zostawić",
  "Zgubić",
  "Zrobić/tworzyć",
  "Poznać/spotkać",
  "Płacić",
  "Kłaść",
  "Czytać",
  "Jeździć/jechać",
  "Biegać",
  "Powiedzieć",
  "Widzieć",
  "Sprzedać",
  "Wysłać",
  "Zamknąć",
  "Śpiewać",
  "Siedzieć",
  "Spać",
  "Mówić/powiedzieć",
  "Wydawać",
  "Stać",
  "ukraść",
  "Pływać",
  "Przyjmować/wziąć",
  "Uczyć kogoś",
  "Powiedzieć/opowiedzieć",
  "Myśleć",
  "Rozumieć",
  "Budzić się",
  "Nosić/ubierać",
  "Wygrywać/zwyciężać",
  "Pisać"
];

let bezokolicznik = [
  "be",
  "become",
  "begin",
  "break",
  "bring",
  "build",
  "buy",
  "can",
  "catch",
  "choose",
  "come",
  "cost",
  "cut",
  "do",
  "drink",
  "drive",
  "eat",
  "fall",
  "feel",
  "fight",
  "find",
  "fly",
  "forget",
  "get",
  "give",
  "go",
  "grow",
  "have",
  "hear",
  "hit",
  "keep",
  "know",
  "learn",
  "leave",
  "lose",
  "Make",
  "Meet",
  "Pay",
  "Put",
  "Read",
  "Ride",
  "Run",
  "Say",
  "See",
  "Sell",
  "Send",
  "Shut",
  "Sing",
  "Sit",
  "Sleep",
  "Speak",
  "Spend",
  "Stand",
  "Steal",
  "Swim",
  "Take",
  "teach",
  "Tell",
  "Think",
  "Understand",
  "Wake",
  "Wear",
  "Win",
  "write"
];

let pastSimple = [
  "was/were",
  "became",
  "began",
  "broke",
  "brought",
  "built",
  "bought",
  "could",
  "caught",
  "chose",
  "came",
  "cost",
  "cut",
  "did",
  "drank",
  "drove",
  "ate",
  "fell",
  "felt",
  "fought",
  "found",
  "flew",
  "forgot",
  "got",
  "gave",
  "went",
  "grew",
  "had",
  "heard",
  "hit",
  "kept",
  "knew",
  "Learnt/learned",
  "left",
  "lost",
  "made",
  "met",
  "paid",
  "put",
  "read",
  "rode",
  "run",
  "said",
  "saw",
  "sold",
  "sent",
  "shut",
  "sang",
  "sat",
  "slept",
  "spoke",
  "spent",
  "stood",
  "stole",
  "swam",
  "took",
  "taught",
  "told",
  "thought",
  "understood",
  "woke",
  "wore",
  "won",
  "wrote"
];

let perfect = [
  "Been",
  "Become",
  "Begun",
  "Broken",
  "brought",
  "Built",
  "Bought",
  "Been able",
  "Caught",
  "Chosen",
  "Come",
  "Cost",
  "Cut",
  "Done",
  "Drunk",
  "Driven",
  "Eaten",
  "Fallen",
  "Felt",
  "Fought",
  "Found",
  "Flown",
  "Forgotten",
  "Got/gotten",
  "Given",
  "Gone",
  "Grown",
  "Had",
  "Heard",
  "Hit",
  "Kept",
  "Known",
  "Learnt/learned",
  "Left",
  "Lost",
  "Made",
  "Met",
  "Paid",
  "Put",
  "Read",
  "Ridden",
  "Run",
  "Said",
  "Seen",
  "Sold",
  "Sent",
  "Shut",
  "Sung",
  "Sat",
  "Slept",
  "Spoken",
  "Spent",
  "Stood",
  "Stolen",
  "swum",
  "Taken",
  "taught",
  "Told",
  "thought",
  "Understood",
  "Woken",
  "Worn",
  "Won",
  "written"
];

const clear = () => {
  wordOne.value = "";
  wordTwo.value = "";
  wordThree.value = "";
  solOne.textContent = "";
  solTwo.textContent = "";
  solThree.textContent = "";

  inputs.forEach(input => {
    input.className = "";
  });
};

const random = () => {
  task = Math.floor(Math.random() * pl.length);
};

const startGame = () => {
  start = "true";
  random();
  word.textContent = pl[task];
  clear();
  comment.textContent = "";
  result.textContent = "0/0";
  btnStart.classList.remove("click");
  wordOne.focus();
};

const checkAnswer = () => {
  let one = wordOne.value.toLowerCase().trim();
  let two = wordTwo.value.toLowerCase().trim();
  let three = wordThree.value.toLowerCase().trim();
  if (one !== bezokolicznik[task].toLowerCase()) {
    wordOne.classList.add("error");
  } else {
    wordOne.classList.add("done");
  }

  if (two !== pastSimple[task].toLowerCase()) {
    wordTwo.classList.add("error");
  } else {
    wordTwo.classList.add("done");
  }

  if (three !== perfect[task].toLowerCase()) {
    wordThree.classList.add("error");
  } else {
    wordThree.classList.add("done");
  }
};

const solutionGame = e => {
  e.preventDefault();
  console.log("działa");
  let one = wordOne.value.trim();
  let two = wordTwo.value.trim();
  let three = wordThree.value.trim();

  if (
    one.toLowerCase() === bezokolicznik[task].toLowerCase() &&
    two.toLowerCase() === pastSimple[task].toLowerCase() &&
    three.toLowerCase() === perfect[task].toLowerCase()
  ) {
    score++;
    comment.textContent = "Dobrze!";
    comment.style.color = "green";
    random();
    word.textContent = pl[task];
    clear();
    wordOne.focus();
  } else {
    solOne.textContent = bezokolicznik[task].toLowerCase();
    solTwo.textContent = pastSimple[task].toLowerCase();
    solThree.textContent = perfect[task].toLowerCase();
    comment.textContent = "Źle";
    comment.style.color = "red";
    btnNext.classList.add("click");
    checkAnswer();
  }
  game++;
  result.textContent = `${score}/${game}`;
};

const next = () => {
  if (start) {
    random();
    clear();
    word.textContent = pl[task];
    btnNext.classList.remove("click");
    wordOne.focus();
  }
};

btnCheck.addEventListener("click", solutionGame);
btnNext.addEventListener("click", next);
btnStart.addEventListener("click", startGame);

// LISTA SŁÓW

// SLIDE
const leftList = document.querySelector(".left-side");
const rightList = document.querySelector(".right-side");
const btnList = document
  .querySelector(".btn-list")
  .addEventListener("click", () => {
    console.log("działa");
    leftList.classList.toggle("active");
    rightList.classList.toggle("active");
  });

// PL
const plLeftColumn = document.querySelector(".pl-left > ul");
const plRightColumn = document.querySelector(".pl-right > ul");
let counterPl = 0;

pl.map(item => {
  if (counterPl < 32) {
    const word = document.createElement("li");
    word.textContent = item.toLowerCase();
    plLeftColumn.appendChild(word);
    counterPl++;
  } else {
    const word = document.createElement("li");
    word.textContent = item.toLowerCase();
    plRightColumn.appendChild(word);
    counterPl++;
  }
});

// INFINITIVE

const invinitiveLeftColumn = document.querySelector(".infinitive-left > ul");
const invinitiveRightColumn = document.querySelector(".infinitive-right > ul");
let counterInvinitive = 0;

bezokolicznik.map(item => {
  if (counterInvinitive < 32) {
    const word = document.createElement("li");
    word.textContent = item;
    invinitiveLeftColumn.appendChild(word);
    counterInvinitive++;
  } else {
    const word = document.createElement("li");
    word.textContent = item;
    invinitiveRightColumn.appendChild(word);
    counterInvinitive++;
  }
});

//PAST SIMPLE

const pastSimpleLeftColumn = document.querySelector(".past-simple-left > ul");
const pastSimpleRightColumn = document.querySelector(".past-simple-right > ul");
let counterPastSimple = 0;

pastSimple.map(item => {
  if (counterPastSimple < 32) {
    const word = document.createElement("li");
    word.textContent = item;
    pastSimpleLeftColumn.appendChild(word);
    counterPastSimple++;
  } else {
    const word = document.createElement("li");
    word.textContent = item;
    pastSimpleRightColumn.appendChild(word);
    counterPastSimple++;
  }
});

//PAST PARTICIPLE

const pastParticipleLeftColumn = document.querySelector(
  ".past-participle-left > ul"
);
const pastParticipleRightColumn = document.querySelector(
  ".past-participle-right > ul"
);
let counterPastParticiple = 0;

perfect.map(item => {
  if (counterPastParticiple < 32) {
    const word = document.createElement("li");
    word.textContent = item.toLowerCase();
    pastParticipleLeftColumn.appendChild(word);
    counterPastParticiple++;
  } else {
    const word = document.createElement("li");
    word.textContent = item.toLowerCase();
    pastParticipleRightColumn.appendChild(word);
    counterPastParticiple++;
  }
});
