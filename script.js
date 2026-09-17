// ── DROPDOWN MENU ──
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = btn.nextElementSibling;
        const arrow = btn.querySelector('.dropdown-arrow');

        // Close all other open dropdowns
        dropdownMenus.forEach(m => {
            if (m !== menu) {
                m.classList.remove('show');
                const otherArrow = m.previousElementSibling.querySelector('.dropdown-arrow');
                if (otherArrow) otherArrow.classList.remove('rotate');
            }
        });

        menu.classList.toggle('show');
        if (arrow) arrow.classList.toggle('rotate');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    dropdownMenus.forEach(menu => {
        if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
            menu.classList.remove('show');
            const arrow = menu.previousElementSibling.querySelector('.dropdown-arrow');
            if (arrow) arrow.classList.remove('rotate');
        }
    });
});

// Close dropdowns on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
            const arrow = menu.previousElementSibling.querySelector('.dropdown-arrow');
            if (arrow) arrow.classList.remove('rotate');
        });
    }
});

// Close dropdown when a dropdown link is clicked
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        link.closest('.dropdown-menu').classList.remove('show');
        const arrow = link.closest('.dropdown-menu').previousElementSibling.querySelector('.dropdown-arrow');
        if (arrow) arrow.classList.remove('rotate');
    });
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ── CLOSE MOBILE MENU ON LINK CLICK ──
document.querySelectorAll('.nav-list > li > a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

// ── FILTER BUTTONS ──
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ── CONTACT FORM SUBMISSION ──
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        this.reset();
    }, 3000);
});
