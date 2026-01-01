document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    // Language Switching Logic
    function setLanguage(lang) {
        // Fallback to English if translation missing
        const t = window.translations[lang] || window.translations['en'];

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = lang;
        }

        // Save preference (optional, not strictly required for this task but good practice)
        localStorage.setItem('bali_portal_lang', lang);
    }

    // Event Listener
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Initialize Language (Default to 'en')
    setLanguage('en');
});
