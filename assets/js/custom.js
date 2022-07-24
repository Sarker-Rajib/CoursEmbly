 {
  var swiper = new Swiper(".TestimonialSwiper", {
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 1,
      spaceBetween: 60,
      centeredSlides: true,
      },
      // when window width is >= 992px
      576: {
      slidesPerView: 2,
      spaceBetween: 60,
      },
      // when window width is >= 1400px
      1400: {
      slidesPerView: 3,
      spaceBetween: 55,
      centeredSlides: true,
      }
    }
  });
}