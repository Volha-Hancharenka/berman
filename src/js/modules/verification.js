import { mediaPage, formVerification } from '../helpers/elementsNodeList'
import { toggleBodyLock } from '../helpers/toggleBodyLock'
import mediaData from '../helpers/mediaData'

const verification = () => {
  let filteredMedia = null

  if (mediaPage) {
    const showVerificationPopupButtons = mediaPage.querySelectorAll('[data-type]')

    showVerificationPopupButtons.forEach((button) => {
      button.addEventListener('click', addAudioNumberToPopup)
    })

    formVerification.addEventListener('submit', setVerefication)
  }

  function addAudioNumberToPopup() {
    filteredMedia = mediaData.audio.filter(({ id }) => id === this.dataset.audioId)[0]
    formVerification.setAttribute('data-id', filteredMedia.id)

    console.log(filteredMedia)
  }

  function setVerefication(e) {
    e.preventDefault()

    const audioItem = mediaPage.querySelector(`[data-audio="${filteredMedia.name}"]`)
    const lock = audioItem.querySelector('.accordion__lock')
    const inputPassword = this.querySelector('input')

    this.classList.remove('_error')
    inputPassword.classList.remove('_error')

    if (inputPassword.value === filteredMedia.secure) {
      this.closest('.code-popup').classList.remove('_is-open')
      audioItem.classList.add('_is-unlock')
      lock.classList.add('_is-unlock')
      console.log(inputPassword.value, 'OK')
      toggleBodyLock(false)
    } else {
      this.classList.add('_error')
      inputPassword.classList.add('_error')
      console.log(inputPassword.value, 'ERROR')
    }

    this.reset()
  }
}

export default verification
