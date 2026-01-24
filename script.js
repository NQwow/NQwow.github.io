(function() {
    const btn = document.getElementById('Change Theme');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
})();