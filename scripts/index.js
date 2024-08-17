const button = document.querySelector('.play_button');
const heading = document.querySelector('.slide');

window.addEventListener('load', function() {
    // Add 'loaded' class when the page loads
    heading.classList.add('loaded');
});

button.addEventListener('click', function() {
    // Add 'active' class and redirect after 1 second
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'player_mode.html';
    }, 1000);
});