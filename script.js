document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('mode-toggle-btn');
    
    modeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('day-mode');
    });
});
