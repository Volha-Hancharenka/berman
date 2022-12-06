import { createTestimonialWindow } from "./createTestimonialWindow";
import { toggleBodyLock } from '../helpers/toggleBodyLock'
import testiData from "./testiData";

const testimonialsPopup = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('.reviews__swiper-slide')) {
      const currentSlide = target.closest('.reviews__swiper-slide')
      const currentTestimonial = testiData.filter(({id}) => id === currentSlide.dataset.slide)

      const { overlay, img } = createTestimonialWindow()

      document.body.append(overlay)
      img.src = currentTestimonial[0].image

      toggleBodyLock(true)

      setTimeout(() => overlay.classList.add('_is-open'), 200)
    }
  })
}

export { testimonialsPopup }