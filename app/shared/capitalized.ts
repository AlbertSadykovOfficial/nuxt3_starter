/*
* You can now use auto-imported utility functions in .js, .ts and .vue files within your Vue app and the server/ directory.
*/
export const capitalize = (input: string) => {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}