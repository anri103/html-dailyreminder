// =================== Выпадающее меню

var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
    var dropdownLink = dropdown.querySelector('.dropdown-link');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', function () {
        dropdownLink.classList.add('active');
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseout', function () {
        dropdownLink.classList.remove('active');
        dropdownMenu.classList.remove('show');
    });
});

// =================== Слайдер

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: '.swiper-pagination'
    },
});
