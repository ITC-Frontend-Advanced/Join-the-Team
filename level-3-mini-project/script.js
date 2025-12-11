/**
 * @param {string} toggleBtnSelector
 * @param {string} darkClass
 */

function setupThemeToggle(toggleBtnSelector, darkClass = 'dark') {
    const toggleBtn = document.querySelector(toggleBtnSelector);
    const root = document.documentElement;

    if (!toggleBtn) {
        console.error('Toggle button not found');
        return;
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.classList.add(darkClass);
    } else {
        root.classList.remove(darkClass);
    }

    toggleBtn.addEventListener('click', () => {
        if (root.classList.contains(darkClass)) {
            root.classList.remove(darkClass);
            localStorage.setItem('theme', 'light');
        } else {
            root.classList.add(darkClass);
            localStorage.setItem('theme', 'dark');
        }
    });
}
