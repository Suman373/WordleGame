

const tileContainer = document.querySelector('.tiles-container');
const keyContainer = document.querySelector('.key-container');



// row generation for the wordle grid
const guessRows = [
    ['', '', '', '', ''], //1
    ['', '', '', '', ''],//2
    ['', '', '', '', ''],//3
    ['', '', '', '', ''],//4
    ['', '', '', '', ''],//5
    ['', '', '', '', '']//6
]

guessRows.forEach((guessRow, guessrowIndex) => {
    const rowEl = document.createElement('div');
    rowEl.setAttribute('id', 'row-' + guessrowIndex);
    guessRow.forEach((guess, guessIndex) => {
        const tileEl = document.createElement('div');
        tileEl.setAttribute('id', 'row-' + guessrowIndex + '-tile-' + guessIndex);
        tileEl.classList.add('tiles-style')
        rowEl.append(tileEl);
    })
    tileContainer.append(rowEl);
})


// appending the keys
const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<<"];


keys.forEach(key => {
    const button = document.createElement('button');
    button.setAttribute('id', key);
    // console.log('id is set')
    button.innerHTML = `<p>${key}</p>`;
    button.addEventListener('click', () => handleClick(key));
    keyContainer.append(button);
    // console.log('key has been appended');
}
)

const handleClick = (key) => {
    // console.log(key,"is clicked");
    addLetter(key);
}
let message = document.getElementById('suitablemsg');
message.textContent = "Start guessing the word!";
let row = 0;
let column = 0;
let deleteLetter;
let wordArray = [];
const addLetter = (key) => {

    if (column >= 0 && column < 5 && key !== '<<' && key !== "Enter") {
        //condition where we are adding a key/letter succesfully
        const letter = document.getElementById(`row-${row}-tile-${column}`);
        letter.textContent = `${key}`;
        wordArray.push(key);

        column++;
    }
    if (column > 0 && column < 5 && key === '<<') {
        // we need to clear the text from prev tile
        deleteLetter = document.getElementById(`row-${row}-tile-${--column}`);
        deleteLetter.innerText = "";
        wordArray.pop(deleteLetter);
        message.textContent = "Erasing letter!";
        //showing a popping message
        setTimeout(() => {
            message.textContent = "";
        }, 600);
    }
    if (key === 'Enter') {
        message.textContent = "Fill your word first ";
    }
    if (column > 4) {
        if (key === "<<") {
            deleteLetter = document.getElementById(`row-${row}-tile-${--column}`);
            wordArray.pop(deleteLetter);
            deleteLetter.innerText = "";
        }
        message.textContent = "Click enter to confirm!"
    };
    if (column === 5 && key == "Enter") {
        //converting array to string
        let string = wordArray.join("");
        console.log("String is", string);
        message.textContent = `Your Word: ${string}`;
        checkarray(string, row);
        wordArray = [];
        column = 0;
        row++;
    }
    if (row > 5) {
        message.style.color = "red";
        message.innerText = 'You chances are over';
        setTimeout(() => { message.innerText = `The word was: ${wordle}` }, 2000);
        playornot(4000);
    }

}

let mystring = "speak stage brain where alter sleep peter group fruit might brown proof point crown cable"
mystring = mystring.toUpperCase();
console.log(mystring);
let wordleArray = mystring.split(' ');
 

const wordle = wordleArray[Math.floor(Math.random()*15)];
let count = 0;
const checkarray = (string, row) => {
    let correctTile;
    let correctKey;

    for (let i = 0; i < 5; i++) {

        if (wordle[i] === string[i]) {
            correctTile = document.getElementById(`row-${row}-tile-${i}`);
            correctKey = document.getElementById(`${wordle[i]}`);
            count++;
            correctTile.classList.add('sexy-tiles');
            correctKey.style.background = "#257028";
            correctTile.style.background = '#257028';
        }
        else if (wordle.includes(string[i])) {
            correctTile = document.getElementById(`row-${row}-tile-${i}`);
            // correctTile.style.color = "black";
            correctKey = document.getElementById(`${string[i]}`);
            correctTile.classList.add('sexy-tiles');
            correctKey.style.background = "#ebbd34";
            correctTile.style.background = '#ebbd34';
        }
        else {
            correctTile = document.getElementById(`row-${row}-tile-${i}`);
            correctTile.classList.add('sexy-tiles');
            correctTile.style.background = "#808080";
        }
    }
    string = "";
    if (count === 5) {
        message.innerText = "Wordlastic!You have won!!!";
        playornot(4000);
        count = 0;
        row = 0;
        column = 0;

    }
    else if (count < 5) {
        count = 0;
    }
}
const playornot = (time) => {
    setTimeout((time) => {
        let k = confirm('Do you want to play again?');
        if (k) { window.location.reload(); }
        else if (!k)
            window.location.replace('https://whydidntyouplay');
    }, time)

}

// for load screen
const mainScreen = document.querySelector('.game-container');
const loadScreen = document.querySelector('.loading-container');
const footer = document.querySelector('footer');
setTimeout(() => {
    loadScreen.style.display = 'none';
    mainScreen.style.display = "block";
    footer.style.display = 'block';
}, 5000);


