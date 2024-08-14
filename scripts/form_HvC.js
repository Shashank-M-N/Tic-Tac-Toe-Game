const gameForm = document.getElementById('user_details');
const levelSlider = document.getElementById('levelSlider');
const selectedLevelSpan = document.getElementById('selectedLevel');
const heading = document.querySelector('.slide')

let option = "HvC";

window.addEventListener('load', function() {
    heading.classList.add('loaded');
});

// Update the displayed level when the slider value changes
levelSlider.addEventListener('input', function () {
    selectedLevelSpan.textContent = levelSlider.value;
});

gameForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value || 'Anonymous';
    const selectedLevel = levelSlider.value;

    localStorage.setItem('user_name', userName);
    localStorage.setItem('selected_level', selectedLevel);
    localStorage.setItem('user_option', option);

    // Redirect to the next page.
    heading.classList.add('active');
    setTimeout(function() {
        window.location.href = 'game.html';
    }, 1000);
});