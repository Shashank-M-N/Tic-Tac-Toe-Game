const user_choice = localStorage.getItem('user_option');

let chance = 1;
let End = false;
let winner = undefined;
let buttonStates = [];
let nextMove = true;
let emptySpaces = 0;
let player1_name = undefined;
let player2_name = undefined;

const quit_btn = document.querySelector('.end_button');
const buttons = document.querySelectorAll('.box');
const player1_chance = document.getElementById('player1_chance');
const player2_chance = document.getElementById('player2_chance');
const exit_screen = document.getElementById('after_game');
const heading = document.querySelector('.slide')

// Simulate delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function disableClick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}

// Disable the buttons
function disableButtons(opacity) {
    const buttons = document.querySelectorAll('.box');
    buttons.forEach(button => {
        button.style.filter = `opacity(${opacity})`;
        button.addEventListener('click', disableClick, true);
        button.style.pointerEvents = 'none';
    });
}

// Enable the buttons
function enableButtons() {
    const buttons = document.querySelectorAll('.box');
    buttons.forEach(button => {
        button.style.filter = '';
        button.removeEventListener('click', disableClick, true);
        button.style.pointerEvents = '';
    });
}

window.addEventListener('load', function () {
    // Add 'loaded' class when the page loads
    heading.classList.add('loaded');
});

quit_btn.addEventListener('click', () => {
    // Add 'active' class and redirect to player mode
    heading.classList.add('active');
    setTimeout(function () {
        window.location.href = 'player_mode.html';
    }, 1000);
});

// Initialize game for human vs human mode
function initializeGameHvH() {

    player1_name = localStorage.getItem('player1_name');
    player2_name = localStorage.getItem('player2_name');

    player1_chance.style.opacity = 1;
    player1_chance.style.transform = 'scale(1)';
    player1_chance.textContent = `${player1_name}'s Chance`;
    player2_chance.textContent = `${player2_name}'s Chance`;
}

// Initialize game for human vs computer mode
function initializeGameHvC() {

    const user_pawn = localStorage.getItem('userChoice');
    const user_name = localStorage.getItem('user_name');

    if (user_pawn == 'cross') {
        player1_name = user_name;
        player2_name = "Computer";
    } else if (user_pawn == 'circle') {
        player1_name = "Computer";
        player2_name = user_name;
    }

    player1_chance.style.opacity = 1;
    player1_chance.style.transform = 'scale(1)';
    player1_chance.textContent = `${player1_name}'s Chance`;
    player2_chance.textContent = `${player2_name}'s Chance`;
}

// Check if the move is valid
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

// Get the current state of the game board
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

// Check if the game is won or tied
function checkForVictoryOrCompletionOfGame() {

    // Logic to check for victory or a tie
    // Updates `End`, `winner`, and `emptySpaces`
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

// Declare the winner or continue the game
function winnerDeclarationOrContinueGame() {

    if (End === true) {
        nextMove == false;
        disableButtons(0.6);
        delay(1500).then(() => {
            after_game.style.display = 'block';
            window.setTimeout(function () {
                after_game.style.display = 'block';
                after_game.offsetHeight;
                after_game.classList.add('show');
            }, 0);
            const winnerDisplay = document.getElementById('winner_display');
            const toMenu = document.getElementById('back_to_menu');
            const toGameSame = document.getElementById('back_to_game_same');
            const toGameDiff = document.getElementById('back_to_game_diff');
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
            toGameSame.addEventListener('click', () => {
                after_game.style.opacity = 0;
                after_game.style.transform = 'scale(0)';
                heading.classList.add('active');
                setTimeout(function () {
                    window.location.href = 'game.html';
                }, 1000);
            });
            toGameDiff.addEventListener('click', () => {
                const user_pawn = localStorage.getItem('userChoice');
                after_game.style.opacity = 0;
                after_game.style.transform = 'scale(0)';
                if (user_choice === 'HvC') {
                    if (user_pawn === 'cross') {
                        localStorage.setItem('userChoice', 'circle');
                    } else if (user_pawn === 'circle') {
                        localStorage.setItem('userChoice', 'cross');
                    }
                } else if (user_choice === 'HvH') {
                    localStorage.setItem('player1_name', player2_name);
                    localStorage.setItem('player2_name', player1_name);
                }
                heading.classList.add('active');
                setTimeout(() => {
                    window.location.href = 'game.html';
                }, 1000);
            });
        });
    }
    else if (nextMove) {
        chance++;
        // Switch active player indicator
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

async function computersMove(buttonStates) {

    // Determine which policy file to use based on whose turn it is.
    return fetch(chance % 2 === 1 ? './policy/policy_p1.json' : './policy/policy_p2.json')
        .then(response => {
            return response.json(); // Convert the response to a JSON object.
        })
        .then(statesValue => {

            // Retrieve the user's selected difficulty level (1-9) and adjust it
            let user_level = parseInt(localStorage.getItem('selected_level'), 10);
            user_level = 10 - user_level; // Higher levels reduce randomness.

            let availableStates = [];

            // Identify the available (empty) cells on the board.
            for (let i = 0; i < buttonStates.length; i++) {
                if (buttonStates[i] === 0) { // If the cell is empty
                    availableStates.push(i);  // Add it to the list of available states.
                }
            }

            if (availableStates.length === 0) { // If no moves are possible
                console.error("No available states found");
                return;
            }

            const randomInt = Math.floor(Math.random() * 10); // Random value between 0 and 9
            let action = null;

            if (randomInt < user_level) {
                // Perform a random move based on the difficulty level.
                action = availableStates[Math.floor(Math.random() * availableStates.length)];
            } else {
                let value_max = -Infinity; // Initialize the max value to the lowest possible value

                availableStates.forEach(index => {
                    // Simulate the next state by placing the computer's move
                    let nextButtonStates = [...buttonStates];
                    nextButtonStates[index] = (chance % 2 === 1) ? 1 : -1;

                    // Convert the board state to a string format for policy lookup
                    nextButtonStates = nextButtonStates.map(num => `${num}.`);
                    const nextStateString = `[ ${nextButtonStates.join('  ')}]`;
                    const key = nextStateString;

                    // Retrieve the state's value from the policy
                    const value = statesValue[key] || 0;

                    // Update the action if this state's value is higher than the current max value
                    if (value > value_max) {
                        value_max = value;
                        action = index;
                    }
                });
            }

            if (action === null || action === undefined) {
                console.error("Action could not be determined.");
                return;
            }

            // Perform the selected action on the game board
            const computerMove = document.querySelector(`[data-cell-index="${action}"]`);
            if (computerMove) {
                computerMove.textContent = (chance % 2 === 1) ? 'X' : 'O';
            } else {
                console.error("Computer made an invalid move.");
            }

            nextMove = true; // Set flag to indicate the move is complete
        })
        .catch(error => {
            console.error('Error fetching the file:', error); // Handle fetch errors
        });
}

// Game logic for human vs computer
if (user_choice === 'HvC') {
    initializeGameHvC();
    if (player1_name === 'Computer') {
        getCurrentState();
        computersMove(buttonStates).then(() => {
            buttonStates = [];
            chance++;
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            checkValidMove(button);
            disableButtons(1);
            getCurrentState();
            checkForVictoryOrCompletionOfGame();
            winnerDeclarationOrContinueGame();

            if (nextMove && !End) {
                delay(1000).then(() => {
                    getCurrentState();
                    computersMove(buttonStates).then(() => {
                        getCurrentState();
                        checkForVictoryOrCompletionOfGame();
                        winnerDeclarationOrContinueGame();
                        if (!End) {
                            enableButtons();
                        }
                    });
                });
            } else {
                if (!End) {
                    enableButtons();
                }
            }
        });
    });
} else if (user_choice === 'HvH') {
    // Game logic for human vs human
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