const swiper_developer = new Swiper('.js-slider', {
  slidesPerView: 1.5,
  loop: true,
  centeredSlides: true,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  preloadImages: false,
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});
