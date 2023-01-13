


// Menu
const menu = document.querySelector('.menu'),
      overlay= menu.querySelector('.overlay'),
      openBtn = menu.querySelector('.menu__btn--open'),
      closeBtn = menu.querySelector('.menu__btn--close')

      openBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        overlay.classList.add('active')
        openBtn.classList.add('hide-btn')
      })

      closeBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        overlay.classList.remove('active')
        openBtn.classList.remove('hide-btn')
      })


// Slider


