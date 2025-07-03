import '../scss/style.scss';


// window.addEventListener('DOMContentLoaded', function () {

//     const themeButton = document.getElementById('switch');
//     const themeIcon = document.getElementById('theme-icon');
//     const arrowBlack = document.querySelectorAll('.arrow_button');
//     const lightText = document.querySelectorAll('.light_text');
//     const mainTitles = document.querySelectorAll('.main_titles');
//     const hamburgerIcon = document.getElementById('hamburger_icon');
//     // const headerLinks = document.querySelectorAll('.header_link');
//     // const headerLinkMenu = document.querySelectorAll('.header_link-menu');



//     function setTheme(mode) {
//         if (mode === 'dark') {
//             document.body.classList.add('dark');
//             themeIcon.src = '/favicon/sun_icon.svg';
//             arrowBlack.forEach(element => element.src = '/favicon/arrow_black.svg');
//             lightText.forEach(text => text.style.color = 'white');
//             mainTitles.forEach(title => title.style.color = 'white');
//             // hamburgerIcon.src = '/favicon/hamburger_menu_white.svg';
//             // headerLinks.forEach(link => link.style.color = 'white');
//             // headerLinkMenu.forEach(link => link.style.color = 'white');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.body.classList.remove('dark');
//             themeIcon.src = '/favicon/moon_icon.svg';
//             arrowBlack.forEach(element => element.src = '/favicon/arrow_white.svg');
//             lightText.forEach(text => text.style.color = 'rgb(72, 78, 83)');
//             mainTitles.forEach(title => title.style.color = '#2b2b2b');
//             // hamburgerIcon.src = '/favicon/hamburger_menu_black.svg';
//             // headerLinks.forEach(link => link.style.color = 'black');
//             // headerLinkMenu.forEach(link => link.style.color = 'black');
//             localStorage.setItem('theme', 'light');
//         }
//     }

//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);


//     themeButton.addEventListener('click', () => {
//         const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//         setTheme(newTheme);
//     });


//     const hamburger = document.getElementById('hamburger_menu');
//     const menu = document.getElementById('menu');


//     hamburger.addEventListener('click', function () {
//         hamburger.classList.toggle('active');
//         menu.classList.toggle('active');
//         if (hamburger.classList.contains('active')) {
//             hamburgerIcon.src = '/favicon/hamburger_menu_black.svg';
//         } else {
//             hamburgerIcon.src = '/favicon/hamburger_menu_white.svg';
//         }
//         // Блокировка прокрутки тела при открытом меню
//         document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
//     });

//     // Закрытие меню при клике на ссылку
//     const menuLinks = document.querySelectorAll('.header_link');
//     menuLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             hamburger.classList.remove('active');
//             menu.classList.remove('active');
//             document.body.style.overflow = '';
//         });
//     });

// });


window.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('switch');
    const themeIcon = document.getElementById('theme-icon');
    const arrowIcons = document.querySelectorAll('.arrow_button');
    const hamburgerIcon = document.getElementById('hamburger_icon');
    const hamburger = document.getElementById('hamburger_menu');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.header_link');
    const body = document.body;
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const modalContainer = document.getElementById('modal-container');
    const openModalButton = document.getElementById('open');
    const contactOpenButton = document.getElementById('contact-button');
    const closeModalButton = document.getElementById('modal_close');

    const updateHamburgerIcon = () => {
        const isDark = body.classList.contains('dark');
        const isMenuOpen = hamburger.classList.contains('active');
        hamburgerIcon.src = isMenuOpen ? '/favicon/hamburger_menu_black.svg'
            : isDark ? '/favicon/hamburger_menu_white.svg'
                : '/favicon/hamburger_menu_black.svg';
    };

    const updateArrows = (isDark) => {
        const arrowSrc = isDark ? '/favicon/arrow_black.svg' : '/favicon/arrow_white.svg';
        arrowIcons.forEach(icon => icon.src = arrowSrc);
    };

    const setTheme = (mode) => {
        const isDark = mode === 'dark';
        body.classList.toggle('dark', isDark);
        themeIcon.src = isDark ? '/favicon/sun_icon.svg' : '/favicon/moon_icon.svg';
        updateArrows(isDark);
        updateHamburgerIcon();
        localStorage.setItem('theme', mode);
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);


    themeButton.addEventListener('click', () => {
        const isDark = body.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        updateHamburgerIcon();
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
            updateHamburgerIcon();
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });




    function closeModalWithEscape(element) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && element.classList.contains('show')) {
                document.body.classList.remove('no-scroll');
                element.classList.remove('show');
            }
        });
    }


    function openModal(button, element) {
        button.addEventListener('click', () => {
            document.body.classList.add('no-scroll');
            element.classList.add('show');
        });
    }

    function closeModal(button, element) {
        button.addEventListener('click', () => {
            document.body.classList.remove('no-scroll');
            element.classList.remove('show');
        });
    }

    function closeOutsideModal(element) {
        element.addEventListener('click', (e) => {
            if (e.target === element) {
                document.body.classList.remove('no-scroll');
                element.classList.remove('show');
            }
        });
    }

    closeModalWithEscape(modalContainer);
    openModal(openModalButton, modalContainer);
    openModal(contactOpenButton, modalContainer);
    closeModal(closeModalButton, modalContainer);
    closeOutsideModal(modalContainer);
});