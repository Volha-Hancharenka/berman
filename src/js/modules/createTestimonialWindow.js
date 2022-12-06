const createTestimonialWindow = () => {
  const overlay = document.createElement('div')
  const body = document.createElement('div')
  const closeButton = document.createElement('button')
  const img = document.createElement('img')

  overlay.classList.add('testi-image-popup', '_overlay-bg')
  body.classList.add('testi-image-popup__body')
  closeButton.classList.add('testi-image-popup__close', 'button-close')
  img.classList.add('testi-image-popup__image')

  closeButton.setAttribute('title', 'Закрыть окно')
  closeButton.setAttribute('type', 'button')
  img.setAttribute('alt', 'Отзыв')

  closeButton.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5905 0.38828C13.4587 0.256608 13.28 0.182649 13.0937 0.182649C12.9073 0.182649 12.7286 0.256608 12.5968 0.38828L6.99992 6.0039L1.40539 0.378905C1.2733 0.246815 1.09415 0.172607 0.907347 0.172607C0.720544 0.172607 0.541391 0.246815 0.409301 0.378905C0.27721 0.510995 0.203003 0.690148 0.203003 0.876952C0.203003 1.06376 0.27721 1.24291 0.409301 1.375L6.00617 7L0.409301 12.625C0.277521 12.7571 0.203611 12.9361 0.203831 13.1227C0.204051 13.3093 0.278382 13.4881 0.410472 13.6199C0.542562 13.7517 0.721592 13.8256 0.908176 13.8254C1.09476 13.8252 1.27361 13.7508 1.40539 13.6187L6.99992 7.99609L12.5968 13.6211C12.7289 13.7532 12.908 13.8274 13.0948 13.8274C13.2816 13.8274 13.4608 13.7532 13.5929 13.6211C13.725 13.489 13.7992 13.3098 13.7992 13.123C13.7992 12.9362 13.725 12.7571 13.5929 12.625L7.99367 7L13.5929 1.375C13.7221 1.24315 13.7943 1.06577 13.7939 0.881159C13.7934 0.696545 13.7204 0.51951 13.5905 0.38828Z"
        fill="white" />
    </svg>
  `

  body.append(closeButton, img)
  overlay.append(body)

  return {
    overlay,
    img
  }
}

export { createTestimonialWindow }
