/**
 * Интерфейс для базовых полей API
 * @interface
 * @property {string} id - Идентификатор модели.
 * @property {string} created_at - Дата создания.
 * @property {string} updated_at - Дата обновления.
 */
export interface IBaseApi {
  id: string | number
  created_at: string
  updated_at: string
}

/**
 * Интерфейс для базовых полей сслыки
 * @interface
 * @property {string} name - Название.
 * @property {string} comment - Комментарий.
 * @property {string} short_link - Сокращенная ссылка.
 * @property {string} qr - QR код.
 */
export interface IBaseLink {
  name: string
  comment: string
  short_link: string
  qr?: string
}

/**
 * Интерфейс для дополнительный полей ссылки
 * @interface
 * @property {string} icon - Ссылка на иконку.
 * @property {string} click_counter - Количество переходов.
 */
export interface IAddonsLink {
  icon: string
  click_counter: string
}

/**
 * Модель web-ссылок
 * @typedef TUrl
 * @implements {IBaseApi}
 * @implements {IBaseLink}
 * @implements {IAddonsLink}
 * @property {string} link - Web ссылка
 */
export type TUrl = IBaseApi & IBaseLink & IAddonsLink & {
  link: string
}
