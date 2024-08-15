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
const heading = document.querySelector('.slide')

window.addEventListener('load', function () {
    heading.classList.add('loaded');
});

quit_btn.addEventListener('click', () => {
    heading.classList.add('active');
    setTimeout(function () {
        window.location.href = 'player_mode.html';
    }, 1000);
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

    buttonStates = [];

    buttons.forEach(button => {
        const buttonText = button.textContent;
        if (buttonText == 'X') {
            buttonStates.push(1);
        } else if (buttonText == 'O') {
            buttonStates.push(-1);
        } else if (buttonText == ' ') {
            buttonStates.push(0);
        } else {
            console.error("Error in Boardstates.");
        }
    });
}

function checkForVictoryOrCompletionOfGame() {

    if (buttonStates[0] == buttonStates[1] && buttonStates[1] == buttonStates[2] && buttonStates[1] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[3] == buttonStates[4] && buttonStates[4] == buttonStates[5] && buttonStates[4] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[6] == buttonStates[7] && buttonStates[7] == buttonStates[8] && buttonStates[7] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[0] == buttonStates[3] && buttonStates[3] == buttonStates[6] && buttonStates[3] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[1] == buttonStates[4] && buttonStates[4] == buttonStates[7] && buttonStates[4] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[2] == buttonStates[5] && buttonStates[5] == buttonStates[8] && buttonStates[5] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[0] == buttonStates[4] && buttonStates[4] == buttonStates[8] && buttonStates[4] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else if (buttonStates[2] == buttonStates[4] && buttonStates[4] == buttonStates[6] && buttonStates[4] != 0) {
        End = true;
        if (chance % 2 == 1) {
            winner = player1_name;
        } else {
            winner = player2_name;
        }
    } else {
        emptySpaces = 0;
        for (let i = 0; i < 9; i++) {
            if (buttonStates[i] == 0) {
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
        nextMove == false;
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
            heading.classList.add('active');
            setTimeout(function () {
                window.location.href = 'player_mode.html';
            }, 1000);
        });
        toGame.addEventListener('click', () => {
            after_game.style.opacity = 0;
            after_game.style.transform = 'scale(0)';
            heading.classList.add('active');
            setTimeout(function () {
                window.location.href = 'game.html';
            }, 1000);
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function computersMove(buttonStates) {
    console.log(`chance: ${chance}`);

    return fetch(chance % 2 === 1 ? './corrected2_policy_p1.json' : './corrected2_policy_p2.json')
        .then(response => {
            console.log(`chance: ${chance}`);
            console.log(chance % 2 === 1 ? "Using policy1" : "Using policy2");
            return response.json();
        })
        .then(statesValue => {
            console.log(statesValue);
            let user_level = parseInt(localStorage.getItem('selected_level'), 10);
            user_level = 10 - user_level;
            let availableStates = [];

            console.log("Button States before processing:", buttonStates);

            for (let i = 0; i < buttonStates.length; i++) {
                if (buttonStates[i] === 0) {
                    availableStates.push(i);
                }
            }

            console.log("Available States:", availableStates);

            if (availableStates.length === 0) {
                console.error("No available states found");
                return;
            }

            const randomInt = Math.floor(Math.random() * 10);
            let action = null;

            if (randomInt < user_level) {
                action = availableStates[Math.floor(Math.random() * availableStates.length)];
                console.log("Random Action Selected:", action);
            } else {
                let value_max = -Infinity;

                availableStates.forEach(index => {
                    let nextButtonStates = [...buttonStates];
                    nextButtonStates[index] = (chance % 2 === 1) ? 1 : -1;
                    nextButtonStates = nextButtonStates.map(num => `${num}.`);
                    const nextStateString = `[ ${nextButtonStates.join('  ')}]`;
                    console.log(nextStateString);
                    const key = nextStateString;
                    const value = statesValue[key]||0;
                    console.log(`State: ${key}, Value: ${value}`);

                    if (value > value_max) {
                        value_max = value;
                        action = index;
                        console.log("Best Action Updated:", action, "with value:", value_max);
                    }
                });
            }

            console.log("Final Action Selected:", action);

            if (action === null || action === undefined) {
                console.error("Action could not be determined.");
                return;
            }

            const computerMove = document.querySelector(`[data-cell-index="${action}"]`);
            if (computerMove) {
                console.log(chance);
                computerMove.textContent = (chance % 2 === 1) ? 'X' : 'O';
            } else {
                console.error("Computer made an invalid move.");
            }

            nextMove = true;
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}

if (user_choice === 'HvC') {
    initializeGameHvC();
    if (player1_name === 'computer') {
        getCurrentState();
        console.log("Initial button states for computer move:", buttonStates);
        computersMove(buttonStates).then(() => {
            buttonStates = [];
            chance++;
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("chance: ", chance);
            checkValidMove(button);
            getCurrentState();
            console.log(`After human move: ${buttonStates}`);
            checkForVictoryOrCompletionOfGame();
            winnerDeclarationOrContinueGame();
            console.log(nextMove);

            if (nextMove && !End) {
                console.log('Going to computer move.');
                delay(1000).then(() => {
                    getCurrentState();
                    console.log("Button states before computer move:", buttonStates);
                    computersMove(buttonStates).then(() => {
                        getCurrentState();
                        console.log(`After computer move: ${buttonStates}`);
                        checkForVictoryOrCompletionOfGame();
                        winnerDeclarationOrContinueGame();
                    });
                });
            }
        });
    });
} else if (user_choice === 'HvH') {
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
    console.error("Invalid user choice!");
}
