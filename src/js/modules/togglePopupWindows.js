import { toggleBodyLock } from './../helpers/toggleBodyLock'

const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('[data-type]')) {
      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open')
        })
      }
      const popup = document.querySelector(`[data-popup="${target.dataset.type}"]`)
      
      popup.classList.add('_is-open')
      toggleBodyLock(true)
    }

    if (target.classList.contains('_overlay-bg') || target.closest('.button-close')) {
      const popup = target.closest('._overlay-bg')

      popup.classList.remove('_is-open')
      toggleBodyLock(false)

      if (popup.classList.contains('testi-image-popup')) {
        setTimeout(() => popup.remove(), 400)
      }
    }
  })
}

export { togglePopupWindows }