const burgerElement = document.querySelector('.header__burger')
const burgerLineElement = document.querySelector('.header__burger-line')
const menuElement = document.querySelector('.header__menu')
const menuLinksCollection = document.querySelectorAll('.header__item')

const aboutSectionElement = document.querySelector('.main__about')
const profileSectionElement = document.querySelector('.main__profile')
const skillsSectionElement = document.querySelector('.main__skills')
const linksSectionElement = document.querySelector('.main__links')
const educationSectionElement = document.querySelector('.main__education')
const expirienceSectionElement = document.querySelector('.main__expirience')
const coursesSectionElement = document.querySelector('.main__courses')
const languageSectionElement = document.querySelector('.main__language')
const hobbiesSectionElement = document.querySelector('.main__hobbies')

const linksObject = {
  Main: aboutSectionElement,
  Profile: profileSectionElement,
  Skills: skillsSectionElement,
  Expirience: expirienceSectionElement,
  Education: educationSectionElement,
  Courses: coursesSectionElement,
  Language: languageSectionElement,
  Hobbies: hobbiesSectionElement,
  Links: linksSectionElement,
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

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})
