import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1.5,
  spaceBetween: 10,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
});

// const swiperReviews = new Swiper('.mySwiperReviews', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 170,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//   },
// });
