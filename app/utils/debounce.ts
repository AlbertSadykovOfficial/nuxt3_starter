/** @global */
export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  let timerId: number
  return function f(...args: T) {
    if (timerId) clearTimeout(timerId)
    timerId = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
