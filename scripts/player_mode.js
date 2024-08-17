const button_HvH = document.querySelector('.mode_HvH');
const button_HvC = document.querySelector('.mode_HvC');
const heading = document.querySelector('.slide');

window.addEventListener('load', function() {
    // Add 'loaded' class when the page loads
    heading.classList.add('loaded');
});

button_HvH.addEventListener('click', function() {
    // Add 'active' class and redirect to HvH menu
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'menu_HvH.html';
    }, 1000);
});

button_HvC.addEventListener('click', function() {
    // Add 'active' class and redirect to player pawn selection
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'player_pawn.html';
    }, 1000);
});