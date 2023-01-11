const burgerElement = document.querySelector('.header__burger')
const burgerLineElement = document.querySelector('.header__burger-line')
const menuElement = document.querySelector('.header__menu')
const menuLinksCollection = document.querySelectorAll('.header__item')

const handlerClickBurger = () => {
  document.body.classList.toggle('stop-scroll')
  burgerElement.classList.toggle('header__burger--active')
  menuElement.classList.toggle('header__menu--visible')
}

const handlerClickOnMenuLinks = () => {
  document.body.classList.remove('stop-scroll')
  burgerElement.classList.toggle('header__burger--active')
  menuElement.classList.toggle('header__menu--visible')
}

const handlerClickOuterMenu = event => {
  if (burgerElement.contains(event.target)) return
  if (!menuElement.classList.contains('header__menu--visible')) return
  if (menuElement.contains(event.target)) return
  document.body.classList.remove('stop-scroll')
  burgerElement.classList.toggle('header__burger--active')
  menuElement.classList.toggle('header__menu--visible')
}

menuLinksCollection.forEach(link =>
  link.addEventListener('click', handlerClickOnMenuLinks)
  )
burgerElement.addEventListener('click', handlerClickBurger)
document.body.addEventListener('click', handlerClickOuterMenu)
