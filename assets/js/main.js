document.addEventListener("DOMContentLoaded", () => {
    // 1. Preloader fade out
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    }

    // 2. Dark/Light Mode Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const root = document.documentElement;
    const body = document.body;
    
    // Check local storage or default to light
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
        
    if (isDarkMode) {
        body.setAttribute('data-theme', 'dark');
        updateIcons(true);
    } else {
        body.setAttribute('data-theme', 'light');
        updateIcons(false);
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateIcons(false);
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateIcons(true);
            }
        });
    });

    function updateIcons(isDark) {
        themeToggles.forEach(toggle => {
            if (isDark) {
                toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                toggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
            }
        });
    }

    // 3. RTL Toggle
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    
    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = root.getAttribute('dir');
            if (currentDir === 'rtl') {
                root.setAttribute('dir', 'ltr');
            } else {
                root.setAttribute('dir', 'rtl');
            }
        });
    });

    // 4. Client-side Form Validation
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })

    // 5. Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTop.title = 'Back to Top';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

