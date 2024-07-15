
const option1Button = document.getElementById('cross');
const option2Button = document.getElementById('circle');

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
    window.location.href = 'menu_HvC.html'
}