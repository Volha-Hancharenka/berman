const toggleElements = () => {
  const buttonsToggleElements = document.querySelectorAll('[data-toggle]')

  if (buttonsToggleElements) {
    buttonsToggleElements.forEach((button) => {
      button.addEventListener('click', setToggleElements)
    })
  }

  function setToggleElements() {
    const currentId = this.dataset.toggle
    const elementNodeToShow = document.querySelector(`[data-toggle-element="${currentId}"]`)

    elementNodeToShow.classList.toggle('_is-visible')
    elementNodeToShow.classList.contains('_is-visible')
      ? elementNodeToShow.style.height = `${elementNodeToShow.scrollHeight}px`
      : elementNodeToShow.style.height = '0px'
  }
}

export { toggleElements }
