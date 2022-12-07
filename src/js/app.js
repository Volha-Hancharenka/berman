import { isWebp, headerFixed, toggleBurgerMenu }from './modules'
import { togglePopupWindows } from './modules/togglePopupWindows'
import { sliderTestimonials } from './modules/sliderTestimonials'
import { testimonialsPopup } from './modules/testimonialsPopup'
import { sendingDataForms } from './modules/sendingDataForms'
import { validateInputTel } from './helpers/validateIputTel'
import { toggleElements } from './modules/toggleElements'
import accordeon from './modules/accordeon'
import verification from './modules/verification'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

// Проверка браузера на поддерку .webp изображений =====================================================================
isWebp()
// =====================================================================================================================

// Паралакс мышей ======================================================================================================
// const mousePrlx = new MousePRLX({})
// =====================================================================================================================

// Фиксированный header ================================================================================================
headerFixed()
// =====================================================================================================================
validateInputTel()
toggleBurgerMenu()
togglePopupWindows()
sliderTestimonials()
testimonialsPopup()
sendingDataForms()
toggleElements()
accordeon()
verification()