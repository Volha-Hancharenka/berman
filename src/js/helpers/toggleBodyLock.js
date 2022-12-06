import { body, lockPaddingElements, pageWrapper } from './elementsNodeList'

const toggleBodyLock = (isLock) => {
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  if (lockPaddingElements) {
    lockPaddingElements.forEach((element) => {
      element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
    })
  }

  body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
  body.classList.toggle('lock', isLock)
}

export { toggleBodyLock }
