import Swiper, { Autoplay } from 'swiper'
import { testimonialsSliderContainer } from '../helpers/elementsNodeList'
import { slideNodeHTML } from '../helpers/getHTMLTemplates'
import testiData from './testiData'

const renderReviewsSlides = () => {
  testiData.forEach((item) => {
    testimonialsSliderContainer.insertAdjacentHTML('beforeend', slideNodeHTML(item))
  })
}

const sliderTestimonials = () => {
  const reviewsContainer = document.querySelector('.reviews__cards')

  if (reviewsContainer) {
    renderReviewsSlides()

    new Swiper(reviewsContainer, {
      modules: [ Autoplay ],
      direction: 'horizontal',
      autoplay: {
        delay: 2000,
      },
      speed: 800,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
      centeredSlides: true,
    })
    
  }
}

export { sliderTestimonials }