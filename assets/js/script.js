// DOM Elements 
let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

//Player 'X' Plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//Enable all buttons (for New game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = "false";
    });

//This Function is executed when a player wins
const winfunction = (letter) => {
    diasbleButtons();
};

//Win Logic
const winChecker = () => {
    //Loop through all win patterns
    for (let i of winningPattern) {
      let [element1, element2, element3] = [
        btnRef[i[0]].innerText,
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
      ];

      //Check if elements are filled

      //If 3 empty elements are same and would give win as would
      if (element1 != "" && (element2 != "") & (element3 != "")) {
        if (element1 == element2 && element2 == element3) {
          //If all 3 buttons have same values then pass the value to winFunction
          winfunction(element1);
        }
      }
    }
  };
        //Display X/O on click
        btnRef.forEach((element) => {
            element.addEventListener("click", () => {
              if (xTurn) {
                xTurn = false;
                //Display X
                element.innerText = "X";
                element.disabled = true;
              } else {
                xTurn = true;
                //Display Y
                element.innerText = "O";
                element.disabled = true;
              }
              //Increment count on each click
              count += 1;
              if (count == 9) {
                drawFunction();
              }
              //Check for win on every click
              winChecker();
            });
          });