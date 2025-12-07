import { FORM, TEXT_AREA, CLEAR_BUTTON } from './constants'
import { analyzeText } from './analyze'
import { clearTable } from './utils'

// обработчик события на форме
export const handleSubmitForm = () => {
  if (FORM) {
    FORM.addEventListener('submit', (event) => {
      event.preventDefault()
      const userData = TEXT_AREA.value?.split(' ') // получаем значение из textarea и делаем массив
      analyzeText(userData)
      TEXT_AREA.value = ''
    })
  }
}

// обработчик события на кнопке очистки таблицы
export const handleClearTable = () => {
  if (CLEAR_BUTTON) {
    CLEAR_BUTTON.addEventListener('click', (event) => {
      event.preventDefault()
      clearTable()
    })
  }
}
