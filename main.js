// настройка слайдера
var swiper = new Swiper('.base__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,

    pagination: {
        el: '.base__pagination',
        clickable: true,
    }
});

// проверка на выбор темы пользователя в ос (темная или светлая)
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
    document.body.classList.add('dark-theme');
    document.querySelectorAll('.categories__item').forEach((item) => {
        item.classList.add('dark-categories');
    });
} else {
    document.body.classList.remove('dark-theme');
    document.querySelectorAll('.categories__item').forEach((item) => {
        item.classList.remove('dark-categories');
    });
}