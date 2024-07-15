const gameForm = document.getElementById('user_details');
const levelSlider = document.getElementById('levelSlider');
const selectedLevelSpan = document.getElementById('selectedLevel');

let option = "HvC";

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
    window.location.href = 'game.html';
});