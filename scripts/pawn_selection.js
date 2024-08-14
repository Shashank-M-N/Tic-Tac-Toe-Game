const option1Button = document.getElementById('cross');
const option2Button = document.getElementById('circle');
const heading = document.querySelector('.slide')

window.addEventListener('load', function() {
    heading.classList.add('loaded');
});

// Add event listeners
option1Button.addEventListener('click', () => {
    handleOptionSelected('cross');
});
option2Button.addEventListener('click', () => {
    handleOptionSelected('circle');
});

// Function to handle the selected option
function handleOptionSelected(selectedOption) {
    localStorage.setItem('userChoice', selectedOption);
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'menu_HvC.html';
    }, 1000);
}