let choiceButtons = document.querySelectorAll(".img")
let player = null;
let choicesMenu = document.querySelector(".user-choice")
let buttons = document.querySelectorAll(".boxes")
let winMsg = document.querySelector(".win-msg");
let reset = document.querySelector(".reset");

let WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

choiceButtons.forEach((circle) => {
    circle.addEventListener("click", () => {
        if(circle.innerText == "O") {
            player = true;
        }
        else {
            player = false;
        }
        console.log(player);
        choicesMenu.classList.add("hide");
    })
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(player == true) {
            button.innerText = "O";
            player = !player;
            button.disabled = true;
        }
        else if(player == false) {
            button.innerText = "X";
            player = !player;
            button.disabled = true;
        }
        showWinner(WinPattern);
        checkDraw();
    })
})

const showWinner = (patterns) => { //function
    for(let pattern of patterns) {
        if (
            buttons[pattern[0]].innerText === buttons[pattern[1]].innerText &&
            buttons[pattern[0]].innerText === buttons[pattern[2]].innerText &&
            buttons[pattern[0]].innerText !== ""
        ) {
            winMsg.innerText = `Congratulations ${buttons[pattern[0]].innerText} won!`;
            disable(buttons);
            return;
        }        
    }
}

const checkDraw = () => { //function
    for(let box of buttons) {
        if(box.innerText === "") {
            return;
        }
    }
    winMsg.innerText = "It's a DRAW!"
}


const disable = (arr) => { //function
    arr.forEach((element) => {
        element.disabled = true;
    })
}

const newGameSetup = () => { //function
    for(let box of buttons) {
        box.innerText = "";
        box.disabled = false;
    }
    choicesMenu.classList.remove("hide");
    player = null;
    winMsg.innerText = "";
}

reset.addEventListener("click", newGameSetup);





