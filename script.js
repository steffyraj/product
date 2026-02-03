// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

// Download Resume
const downloadBtn = document.getElementById('downloadResume');
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Resume download feature - Upload your PDF to enable!');
});
