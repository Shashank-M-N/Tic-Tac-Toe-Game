const button = document.querySelector('.play_button');
const heading = document.querySelector('.slide')

window.addEventListener('load', function() {
    heading.classList.add('loaded');
});

button.addEventListener('click', function() {
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'player_mode.html';
    }, 1000);
});