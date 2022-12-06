const accordeon = () => {
  const accordionItems = document.querySelectorAll('.accordion__item')
  const accordionContainer = document.querySelector('.accordion__block')

  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion__header')
    const content = item.querySelector('.accordion__content')
    const icon = item.querySelector('.accordion__icon')

    if (item.hasAttribute('data-open')) {
      item.classList.add('open')
      content.style.height = `${content.scrollHeight}px`
      icon.classList.replace('hide', 'show')
    }
    const colorBackground = item.dataset.colorBack
    const colorBorder = item.dataset.colorBorder

    if (colorBackground || colorBorder) {
      item.style.background = colorBackground
      item.style.borderColor = colorBorder
    }

    header.addEventListener('click', () => {
      item.classList.toggle('open')
      if (item.classList.contains('open')) {
        content.style.height = `${content.scrollHeight}px`
        icon.classList.replace('hide', 'show')
      } else {
        content.style.height = 0
        icon.classList.replace('show', 'hide')
      }

      if (accordionContainer.dataset.autoClosing === 'true') {
        removeOpen(index)
      }
    })
  })

  function removeOpen(i) {
    accordionItems.forEach((item, index) => {
      if (i != index) {
        const content = item.querySelector('.accordion__content')
        const icon = item.querySelector('.accordion__icon')

        item.classList.remove('open')
        content.style.height = 0
        icon.classList.replace('show', 'hide')
      }
    })
  }
}

export default accordeon