import { postData } from '../helpers/postData'

const sendingDataForms = () => {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      try {
        const error = formValidate(form)
        const formData = new FormData(form)

        if (error === 0) {
          form.classList.add('_sending')
          const response = await postData('./../files/php/sendTelegram.php', formData)
          
          if (response.status === 200) {
            form.classList.remove('_sending')
            alert(response.message)
          } else {
            console.log('Произошла какая то ошибка!');
            alert(response.message)
            form.classList.remove('_sending')
          }
        } else {
          alert('Заполните обязательные поля!')
        }
      } catch (error) {
        form.classList.remove('_sending')
        console.error('Error: ', error);
      } finally {
        form.reset()
      }
    })
  })

  const formValidate = (form) => {
    let error = 0
    const inputsRequired = form.querySelectorAll('._req')

    inputsRequired.forEach((input) => {
      formRemoveError(input)

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input)
          error++
        }
      } else {
        if (input.value === '') {
          formAddError(input)
          error++
        }
      }
    })

    return error
  }

  const formAddError = (input) => {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  const emailTest = (input) => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

export { sendingDataForms }
