const burgerElement = document.querySelector('.header__burger')
const burgerLineElement = document.querySelector('.header__burger-line')
const menuElement = document.querySelector('.header__menu')
const menuLinksCollection = document.querySelectorAll('.header__item')

const aboutSectionElement = document.querySelector('.main__about')
const summarySectionElement = document.querySelector('.main__summary')
const skillsSectionElement = document.querySelector('.main__skills')
const linksSectionElement = document.querySelector('.main__links')
const educationSectionElement = document.querySelector('.main__education')

const linksObject = {
  Main: aboutSectionElement,
  Summary: summarySectionElement,
  Skills: skillsSectionElement,
  Links: linksSectionElement,
  Education: educationSectionElement,
}

const handleClickBurger = () => {
  document.body.classList.toggle('stop-scroll')
  burgerElement.classList.toggle('header__burger--active')
  menuElement.classList.toggle('header__menu--visible')
}

const handleClickOnMenuLinks = event => {
  if (event.target.tagName == 'LI') {
    const prop = event.target.innerHTML

    document.body.classList.remove('stop-scroll')
    burgerElement.classList.toggle('header__burger--active')
    menuElement.classList.toggle('header__menu--visible')

    if (linksObject[prop]?.tagName == 'SECTION') {
      linksObject[prop].scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  } else return
}

const handleClickOuterMenu = event => {
  if (burgerElement.contains(event.target)) return
  if (!menuElement.classList.contains('header__menu--visible')) return
  if (menuElement.contains(event.target)) return
  document.body.classList.remove('stop-scroll')
  burgerElement.classList.toggle('header__burger--active')
  menuElement.classList.toggle('header__menu--visible')
}

menuElement.addEventListener('click', handleClickOnMenuLinks)
burgerElement.addEventListener('click', handleClickBurger)
document.body.addEventListener('click', handleClickOuterMenu)
