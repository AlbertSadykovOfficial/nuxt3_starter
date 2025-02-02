import type { IUser } from '../Interfaces/IUser'

/**
 * Модель пользователя упрощенная
 * @typedef TUserSimple
 * @implements {IUser}
 * @property {string} last_name - Фамилия.
 * @property {string} email - E-mail.
 * @property {string} birthday - День Рождения.
 */
export type TUserSimple = IUser & {
  last_name: string
  email: string
  birthday: string
}
