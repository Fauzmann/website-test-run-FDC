// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
} else {
    document.body.setAttribute('data-theme', 'light');
    updateButtonText('light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

// Update button text based on theme
function updateButtonText(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}