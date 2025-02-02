/**
 * Модель методов модального окна
 * @typedef TModalOptions
 * @property {Function} open - Функция открытия
 * @property {Function} close - Функция Закрытия
 */
export type TModalOptions = {
  open: () => void
  close: () => void
}

/**
 * Модель объекта модальных окон
 * @typedef TModal
 */
export type TModal = {
  [name: string]: TModalOptions
}
