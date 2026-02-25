document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var htmlElement = document.documentElement;

    var themeBtn = document.querySelector('[data-action="theme-toggle"]');
    var fontDecBtn = document.querySelector('[data-action="font-decrease"]');
    var fontIncBtn = document.querySelector('[data-action="font-increase"]');
    var menuIcon = document.querySelector('.subpage-menu-icon');
    var links = document.querySelector('.subpage-links');
    var navAnchors = document.querySelectorAll('.subpage-links a');

    var currentFontSize = 16;

    var savedMode = localStorage.getItem('portalThemeMode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
    } else if (savedMode === 'high-contrast') {
        body.classList.add('high-contrast-mode');
    }

    var savedFontSize = Number(localStorage.getItem('portalFontSize'));
    if (savedFontSize >= 12 && savedFontSize <= 22) {
        currentFontSize = savedFontSize;
        htmlElement.style.fontSize = currentFontSize + 'px';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('high-contrast-mode');
                localStorage.setItem('portalThemeMode', 'high-contrast');
            } else if (body.classList.contains('high-contrast-mode')) {
                body.classList.remove('high-contrast-mode');
                localStorage.setItem('portalThemeMode', 'light');
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('portalThemeMode', 'dark');
            }
        });
    }

    if (fontIncBtn) {
        fontIncBtn.addEventListener('click', function () {
            if (currentFontSize < 22) {
                currentFontSize += 2;
                htmlElement.style.fontSize = currentFontSize + 'px';
                localStorage.setItem('portalFontSize', String(currentFontSize));
            }
        });
    }

    if (fontDecBtn) {
        fontDecBtn.addEventListener('click', function () {
            if (currentFontSize > 12) {
                currentFontSize -= 2;
                htmlElement.style.fontSize = currentFontSize + 'px';
                localStorage.setItem('portalFontSize', String(currentFontSize));
            }
        });
    }

    if (menuIcon && links) {
        var toggleMenu = function () {
            menuIcon.classList.toggle('active');
            links.classList.toggle('active');
        };

        menuIcon.addEventListener('click', toggleMenu);
        menuIcon.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });

        navAnchors.forEach(function (anchor) {
            anchor.addEventListener('click', function () {
                menuIcon.classList.remove('active');
                links.classList.remove('active');
            });
        });
    }

    var currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
