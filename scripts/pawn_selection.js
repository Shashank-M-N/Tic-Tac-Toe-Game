const option1Button = document.getElementById('cross');
const option2Button = document.getElementById('circle');
const heading = document.querySelector('.slide');

window.addEventListener('load', function() {
    // Add 'loaded' class when the page loads
    heading.classList.add('loaded');
});

// Add event listeners for option selection
option1Button.addEventListener('click', () => {
    handleOptionSelected('cross');
});
option2Button.addEventListener('click', () => {
    handleOptionSelected('circle');
});

// Handle the selected option and redirect
function handleOptionSelected(selectedOption) {
    localStorage.setItem('userChoice', selectedOption);
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'menu_HvC.html';
    }, 1000);
}