const gameForm = document.getElementById('user_details');
const heading = document.querySelector('.slide');

let option = "HvH";

window.addEventListener('load', function() {
    // Add 'loaded' class when the page loads
    heading.classList.add('loaded');
});

gameForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get player names or set default values
    const player1Name = document.getElementById('player1Name').value || 'Player 1';
    const player2Name = document.getElementById('player2Name').value || 'Player 2';

    // Save player names and option in local storage
    localStorage.setItem('player1_name', player1Name);
    localStorage.setItem('player2_name', player2Name);
    localStorage.setItem('user_option', option);

    // Add 'active' class and redirect after 1 second
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'game.html';
    }, 1000);
});