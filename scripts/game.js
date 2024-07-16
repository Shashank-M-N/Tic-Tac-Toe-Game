const user_choice = localStorage.getItem('user_option');

let chance = 1;
let End = false;
let winner = undefined;
let buttonStates = [];
let nextMove = true;
let emptySpaces = 0;
let player1_name = undefined;
let player2_name = undefined;

const quit_btn = document.querySelector('.my_button');
const buttons = document.querySelectorAll('.box');
const player1_chance = document.getElementById('player1_chance');
const player2_chance = document.getElementById('player2_chance');
const exit_screen = document.getElementById('after_game');

quit_btn.addEventListener('click', () => {
    window.location.href = "player_mode.html";
});

function initializeGameHvH() {

    player1_name = localStorage.getItem('player1_name');
    player2_name = localStorage.getItem('player2_name');

    player1_chance.style.opacity = 1;
    player1_chance.style.transform = 'scale(1)';
    player1_chance.textContent = `${player1_name}'s Chance`;
    player2_chance.textContent = `${player2_name}'s Chance`;
}

function initializeGameHvC() {

    const user_pawn = localStorage.getItem('userChoice');
    const user_name = localStorage.getItem('user_name');
    const user_level = localStorage.getItem('selected_level')

    if (user_pawn == 'cross') {
        player1_name = user_name;
        player2_name = "computer";
    } else if (user_pawn == 'circle') {
        player1_name = "computer";
        player2_name = user_name;
    }

    player1_chance.style.opacity = 1;
    player1_chance.style.transform = 'scale(1)';
    player1_chance.textContent = `${player1_name}'s Chance`;
    player2_chance.textContent = `${player2_name}'s Chance`;
}

function checkValidMove(button) {

    const cellIndex = button.getAttribute('data-cell-index');

    const buttonText = button.textContent;
    if (buttonText === 'X') {
        window.alert("Invalid Move");
        nextMove = false;
    } else if (buttonText === 'O') {
        window.alert("Invalid Move");
        nextMove = false;
    } else {
        button.textContent = (chance % 2 === 1) ? 'X' : 'O';
        nextMove = true;
    }
}

function getCurrentState() {

    buttons.forEach(button => {
        const buttonText = button.textContent;
        buttonStates.push(buttonText);
    });
}

function checkForVictoryOrCompletionOfGame() {

    if (buttonStates[0] == buttonStates[1] && buttonStates[1] == buttonStates[2] && buttonStates[1] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[3] == buttonStates[4] && buttonStates[4] == buttonStates[5] && buttonStates[4] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[6] == buttonStates[7] && buttonStates[7] == buttonStates[8] && buttonStates[7] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[0] == buttonStates[3] && buttonStates[3] == buttonStates[6] && buttonStates[3] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[1] == buttonStates[4] && buttonStates[4] == buttonStates[7] && buttonStates[4] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[2] == buttonStates[5] && buttonStates[5] == buttonStates[8] && buttonStates[5] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[0] == buttonStates[4] && buttonStates[4] == buttonStates[8] && buttonStates[4] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[2] == buttonStates[4] && buttonStates[4] == buttonStates[6] && buttonStates[4] != ' ') {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else {
        emptySpaces = 0;
        for (let i = 0; i < 9; i++) {
            if (buttonStates[i] == ' ') {
                emptySpaces++;
            }
        }
        if (emptySpaces === 0) {
            winner = 0;
            End = true;
        }
    }

    buttonStates = [];
}

function winnerDeclarationOrContinueGame() {

    if (End === true) {
        console.log(`${winner} won the match`);
        buttons.forEach(button => {
            button.disabled = true;
        });
        after_game.style.display = 'block';
        window.setTimeout(function () {
            after_game.style.opacity = 1;
            after_game.style.transform = 'scale(1)';
        }, 0);
        const winnerDisplay = document.getElementById('winner_display');
        const toMenu = document.getElementById('back_to_menu');
        const toGame = document.getElementById('back_to_game');
        if (winner != 0) {
            winnerDisplay.textContent = `${winner} won the match`;
        } else {
            winnerDisplay.textContent = 'The match is tied';
        }
        toMenu.addEventListener('click', () => {
            after_game.style.opacity = 0;
            after_game.style.transform = 'scale(0)';
            window.location.href = "player_mode.html";
        });
        button.addEventListener('click', () => {
            after_game.style.opacity = 0;
            after_game.style.transform = 'scale(0)';
        });
    }
    else if (nextMove) {
        chance++;
        if (chance % 2 == 0) {
            player2_chance.style.opacity = 1;
            player2_chance.style.transform = 'scale(1)';
            player1_chance.style.opacity = 0;
            player1_chance.style.transform = 'scale(0)';
        } else {
            player1_chance.style.opacity = 1;
            player1_chance.style.transform = 'scale(1)';
            player2_chance.style.opacity = 0;
            player2_chance.style.transform = 'scale(0)';
        }
    }
}

if (user_choice == 'HvC') {
    initializeGameHvC();
    End = true;
    checkForVictoryOrCompletionOfGame();
    winnerDeclarationOrContinueGame();

} else if (user_choice == 'HvH') {
    initializeGameHvH();
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            checkValidMove(button);
            getCurrentState();
            checkForVictoryOrCompletionOfGame();
            winnerDeclarationOrContinueGame();
        });
    });
} else {
    console.log("Error!")
}