/*
* You can now use auto-imported utility functions in .js, .ts and .vue files within your Vue app and the server/ directory.
*/

/**
 * Переводит строку в нижний регистр
 * @global
 * @example
 * // returns пример
 * capitalize('Пример');
 * @example
 * // returns КаК ДелА?
 * capitalize('как дела?');
 * @returns {String} Возращает исходную строку в нижнем регистре, либо пустую строку, если параметр не был передан
 */
export default function lowercase(input: string) {
  return input?.toLowerCase() || ''
}
