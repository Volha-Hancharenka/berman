import { mediaPage, formVerification } from "../helpers/elementsNodeList"
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

  function addAudioNumberToPopup () {
    filteredMedia = mediaData.audio.filter(({ id }) => id === this.dataset.audioId)[0]
    formVerification.setAttribute('data-id', filteredMedia.id)

    console.log(filteredMedia);
  }

  function setVerefication(e) {
    e.preventDefault()

    const inputPasswordValue = this.querySelector('input').value

    if (inputPasswordValue === filteredMedia.secure) {
      console.log(inputPasswordValue, 'OK');
    } else {
      console.log(inputPasswordValue, 'ERROR');
    }
  }
}

export default verification