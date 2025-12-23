import { USER_TEXT, ANSWERS } from './constants'
/**
 * Функция для получения первого символа текста
 * @param {string[]} words - исходный текст
 * @returns {string} первый символ текста
 */
export const firstCharacter = (words) => words?.at(0)?.at(0)

/**
 * Функция для получения количества слов в тексте
 * @param {string[]} words - исходный текст
 * @returns {number} количество слов в тексте
 */
export const wordsCount = (words) => words?.length

/**
 * Функция для получения количества символов в тексте
 * @param {string[]} words - исходный текст
 * @returns {number} количество символов в тексте без учета пробелов
 */
export const numberOfCharacters = (words) => {
  return words?.reduce((acc, word) => acc + word.length, 0)
}

/**
 * Функция для получения самого длинного слова в тексте
 * @param {string[]} words - исходный текст
 * @returns {string} самое длинное слово в тексте
 */
export const maxLengthWord = (words) => {
  const sortedWords = words?.sort((a, b) => b.length - a.length)
  return sortedWords?.at(0)
}

// Домашка от 07.12.2025 здесь
/**
 * Возвращает перевернутое слово
 * @param {string} words - Данные пользователя
 */
export const reverseWord = (words) => {
  return words?.split('')?.reverse()?.join('')
}

/**
 * Возвращает количество предложений
 * @param {string} words - Данные пользователя
 */
export const sentencesCount = (words) => {
  const sentences = words?.split('.')
  return sentences?.length
}

/**
 * Возвращает количество уникальных слов
 * @param {string} words - Данные пользователя
 */
export const uniqueWordsCount = (words) => {
  const word = words
    .split(' ')
    .map((a) => a.trim())
    .filter((a) => a !== '')
  const uniqueWords = new Set(word)
  return uniqueWords.size
}

/**
 * Возвращает строку отсортированную в алфавитном порядке
 * @param {string} words - Данные пользователя
 */
export const wordsAlphabetical = (words) => {
  return words
    .split(' ')
    .map((word) => word.trim())
    .filter((word) => word !== '')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join(' ')
}

/**
 * Функция для анализа текста
 * @param {string[]} userData - данные пользователя
 */
export function analyzeText(userData) {
  USER_TEXT.textContent = userData?.join(', ')
  ANSWERS.FIRST_CHARACTER.textContent = firstCharacter(userData)
  ANSWERS.WORDS_COUNT.textContent = wordsCount(userData)
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = numberOfCharacters(userData)
  ANSWERS.MAX_LENGTH_WORD.textContent = maxLengthWord(userData)
  ANSWERS.REVERSE_WORD.textContent = reverseWord(userData?.join(' '))
  ANSWERS.SENTENCES_COUNT.textContent = sentencesCount(userData?.join(' '))
  ANSWERS.UNIQUE_WORD_COUNT.textContent = uniqueWordsCount(userData?.join(' '))
  ANSWERS.WORDS_IN_ALPHABETICAL_ORDER.textContent = wordsAlphabetical(userData?.join(' '))
}
