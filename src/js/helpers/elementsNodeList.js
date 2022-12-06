const body = document.body
const pageWrapper = document.querySelector('.page')
const header = document.querySelector('.header')
const firstScreen = document.querySelector('[data-observ]')
const burgerButton = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const lockPaddingElements = document.querySelectorAll('.lock-padding')
const showContactButton = document.querySelector('[data-type="contacts"]')
const showFormPopupButton = document.querySelector('[data-type="sendForm"]')
const testimonialsSliderContainer = document.querySelector('.reviews__swiper-wrapper')

export {
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  showContactButton,
  showFormPopupButton,
  testimonialsSliderContainer
}
