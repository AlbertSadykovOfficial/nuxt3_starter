/*
* You can now use auto-imported utility functions in .js, .ts and .vue files within your Vue app and the server/ directory.
*/

/**
 * Переводит первый символ в верхний регистр
 * @global
 * @example
 * // returns Пример
 * capitalize('пример');
 * @example
 * // returns Как дела?
 * capitalize('Как дела?');
 * @returns {String} Возращает исходную строку, которая начинается с заглавной буквы
 */
export const capitalize = (input: string) => {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}
