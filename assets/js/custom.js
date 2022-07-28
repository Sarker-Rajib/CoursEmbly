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

{
  const mySlider = document.getElementById("mySlider");
  const sliderValue = document.getElementById("slider-value");
  const progressedBg = document.getElementById("active-progress");

  function slider(){
     valPercent = (mySlider.value / mySlider.max)*100;
     const Wvalue = (mySlider.value / mySlider.max) * 100 + '%';
     sliderValue.innerHTML = mySlider.value;
     progressedBg.style.width = Wvalue;
  }

  slider();
}

{
  const mySlider2 = document.getElementById("mySlider2");
  const sliderValue2 = document.getElementById("slider-value2");
  const progressedBg2 = document.getElementById("active-progress2");

  function slider2(){
     valPercent = (mySlider2.value / mySlider2.max)*100;
     const Wvalue2 = (mySlider2.value / mySlider2.max) * 100 + '%';

     sliderValue2.innerHTML = mySlider2.value;
     progressedBg2.style.width = Wvalue2;
  }

  slider2();
}