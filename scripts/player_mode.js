const button_HvH = document.querySelector('.mode_HvH');
const button_HvC = document.querySelector('.mode_HvC');
const heading = document.querySelector('.slide')

window.addEventListener('load', function() {
    heading.classList.add('loaded');
});

button_HvH.addEventListener('click', function() {
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'menu_HvH.html';
    }, 1000);
});

button_HvC.addEventListener('click', function() {
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'player_pawn.html';
    }, 1000);
});