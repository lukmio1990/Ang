const word = document.querySelector('h1');
const result = document.querySelector('.number');
const comment = document.querySelector('.comment');
//pobieranie inputów
const wordOne = document.querySelector('input#wordOne');
const wordTwo = document.querySelector('input#wordTwo');
const wordThree = document.querySelector('input#wordThree');
//button
const btnStart = document.querySelector('button.start');
const btnCheck = document.querySelector('button.check');
const btnNext = document.querySelector('button.next');
// rozwiązanie
const solOne = document.querySelector('#one');
const solTwo = document.querySelector('#two');
const solThree = document.querySelector('#three');

let score = 0;
let task;
let game = 0;

let pl = ["Być", "Zostać", "Zaczynać", "Złamać", "Przynieść", "Budować", "Kupować", "Móc", "Łapać/chwytać", "Wybrać", "Przyjść", "Kosztować", "Ciąć/odciąć/przyciąć", "Robić", "Pić", "Prowadzić", "Jeść", "spaść", "Czuć", "Walczyć", "Znaleźć", "Latać", "Zapomnieć", "Dostać/otrzymać", "Dać", "Pójść/pojechać", "Rosnąć", "Mieć", "Słyszeć/słuchać", "Trafić/uderzyć", "Trzymać", "Wiedzieć", "Dowiedzieć/uczyć", "Opuścić/wyjść/zostawić", "Zgubić", "Zrobić/tworzyć", "Poznać/spotkać", "Płacić", "Kłaść", "Czytać", "Jeździć/jechać", "Biegać", "Powiedzieć", "Widzieć", "Sprzedać", "Wysłać", "Zamknąć", "Śpiewać", "Siedzieć", "Spać", "Mówić/powiedzieć", "Wydawać", "Stać", "ukraść", "Pływać", "Przyjmować/wziąć", "Uczyć kogoś", "Powiedzieć/opowiedzieć", "Myśleć", "Rozumieć", "Budzić się", "Nosić/ubierać/mieć na sobie", "Wygrywać/zwyciężać", "Pisać"];

let bezokolicznik = ["be", "become", "begin", "break", "bring", "build", "buy", "Can", "Catch", "Choose", "Come", "Cost", "Cut", "Do", "Drink", "Drive", "Eat", "Fall", "Feel", "Fight", "Find", "Fly", "Forget", "Get", "Give", "Go", "Grow", "Have", "Hear", "Hit", "Keep", "Know", "Learn", "Leave", "Lose", "Make", "Meet", "Pay", "Put", "Read", "Ride", "Run", "Say", "See", "Sell", "Send", "Shut", "Sing", "Sit", "Sleep", "Speak", "Spend", "Stand", "Steal", "Swim", "Take", "teach", "Tell", "Think", "Understand", "Wake", "Wear", "Win", "write"]

let pastSimple = ["was/were", "became", "began", "broke", "brought", "built", "bought", "could", "caught", "chose", "came", "cost", "cut", "did", "drank", "drove", "ate", "fell", "felt", "fought", "found", "flew", "forgot", "got", "gave", "went", "grew", "had", "heard", "hit", "kept", "knew", "Learnt/learned", "left", "lost", "made", "met", "paid", "put", "read", "rode", "run", "said", "saw", "sold", "sent", "shut", "sang", "sat", "slept", "spoke", "spent", "stood", "stole", "swam", "took", "taught", "told", "thought", "understood", "woke", "wore", "won", "wrote"];

let perfect = ["Been", "Become", "Begun", "Broken", "brought", "Built", "Bought", "Been able", "Caught", "Chosen", "Come", "Cost", "Cut", "Done", "Drunk", "Driven", "Eaten", "Fallen", "Felt", "Fought", "Found", "Flown", "Forgotten", "Got/gotten", "Given", "Gone", "Grown", "Had", "Heard", "Hit", "Kept", "Known", "Learnt/learned", "Left", "Lost", "Made", "Met", "Paid", "Put", "Read", "Ridden", "Run", "Said", "Seen", "Sold", "Sent", "Shut", "Sung", "Sat", "Slept", "Spoken", "Spent", "Stood", "Stolen", "swum", "Taken", "taught", "Told", "thought", "Understood", "Woken", "Worn", "Won", "written"];

const clear = (() => {
    wordOne.value = "";
    wordTwo.value = "";
    wordThree.value = "";
})

const clearSolution = (() => {
    solOne.textContent = "";
    solTwo.textContent = "";
    solThree.textContent = "";
})

const random = (() => {
    task = Math.floor(Math.random() * pl.length);
})

const startGame = (() => {
    random();
    word.textContent = pl[task];
    clearSolution();
    clear();
    comment.textContent = "";
    result.textContent = `${score}/${game}`;
    btnStart.classList.remove('click');
    wordOne.focus();
})


const solutionGame = ((e) => {
    e.preventDefault();
    console.log('działa');
    let one = wordOne.value
    let two = wordTwo.value
    let three = wordThree.value

    if ((one.toLowerCase() === bezokolicznik[task].toLowerCase()) && (two.toLowerCase() === pastSimple[task].toLowerCase()) && (three.toLowerCase() === perfect[task].toLowerCase())) {
        score++;
        comment.textContent = "Dobrze!";
        comment.style.color = "green";
        random();
        word.textContent = pl[task];
        clear();
        clearSolution();
        wordOne.focus();
    } else {
        solOne.textContent = bezokolicznik[task];
        solTwo.textContent = pastSimple[task];
        solThree.textContent = perfect[task];
        comment.textContent = "Źle";
        comment.style.color = "red";
        btnNext.classList.add('click');
    }
    game++;
    result.textContent = `${score}/${game}`;
})

const next = (() => {
    random();
    clear();
    clearSolution();
    word.textContent = pl[task];
    btnNext.classList.remove('click');
    wordOne.focus();
})

btnCheck.addEventListener("click", solutionGame);
btnStart.addEventListener("click", startGame);
btnNext.addEventListener("click", next);