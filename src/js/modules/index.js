import { toggleBodyLock } from '../helpers/toggleBodyLock'
import {
  header,
  firstScreen,
  menu,
  burgerButton,
} from '../helpers/elementsNodeList'

// FLS (Full Logging System) =================================================================================================================
export function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message)
    }
  }, 0)
}

// Проверка браузера на поддержку .webp изображений =================================================================================================================
export function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

// Функция для фиксированной шапки при скролле =================================================================================================================
export function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

//бургер
export function toggleBurgerMenu() {
  let isLock = false

  burgerButton.addEventListener('click', () => {
    isLock = !isLock
    toggleBodyLock(isLock)

    burgerButton.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
  })
}
