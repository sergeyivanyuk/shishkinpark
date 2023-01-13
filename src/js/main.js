
// Menu
const menu = document.querySelector('.menu'),
      menuOverlay= menu.querySelector('.overlay'),
      openBtn = menu.querySelector('.menu__btn--open'),
      closeBtn = menu.querySelector('.menu__btn--close')

      openBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        menuOverlay.classList.add('active')
        openBtn.classList.add('hide-btn')
      })

      closeBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        menuOverlay.classList.remove('active')
        openBtn.classList.remove('hide-btn')
      })


// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
  },
});


// faq modal

const faq = document.querySelector('.faq'),
      modal = faq.querySelector('.modal'),
      faqOverlay = faq.querySelector('.overlay'),
      faqCloseBtn = faq.querySelector('.modal__close'),
      faqOpenBtn = faq.querySelector('.modal__open');

      faqOpenBtn.addEventListener('click', (e) => {
        e.preventDefault()
        faqOverlay.classList.add('active')
        faqOpenBtn.classList.add('hide-btn')
      })
      faqCloseBtn.addEventListener('click', (e) => {
        e.preventDefault()
        faqOverlay.classList.remove('active')
        faqOpenBtn.classList.remove('hide-btn')
      })



      // Smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
