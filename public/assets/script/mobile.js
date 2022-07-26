const mobileBtn = document.querySelector('.mobile-nav__btn')
const mobileBtnClose = document.querySelector('.mobile-nav__menu__close')
const mobileMenu = document.querySelector('.mobile-nav__menu')
const backgroundBlur = document.querySelector('.background-blur')

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  backgroundBlur.classList.toggle('active')
})

mobileBtnClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  backgroundBlur.classList.toggle('active')
})

backgroundBlur.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  backgroundBlur.classList.toggle('active')
})
