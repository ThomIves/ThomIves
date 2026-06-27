(function() {
    var saved = localStorage.getItem('prep-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (saved === null && prefersDark)) {
        document.body.classList.add('dark');
    }
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        function updateIcon() {
            btn.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
            btn.setAttribute('aria-label', document.body.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode');
        }
        updateIcon();
        btn.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            localStorage.setItem('prep-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
            updateIcon();
        });
    });
})();
