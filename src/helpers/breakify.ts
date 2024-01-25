import { elements } from '../constants/elements'

export const breakify = (str: string): [string, string, string] => {
  const length = str.length
  if (length === 0) return [str, '', '']

  for (let i = 0; i < length; i++) {
    const oneChar = str[i].toUpperCase()
    const twoChar = `${oneChar}${str[i + 1]}`

    if (elements.has(twoChar)) {
      return [str.slice(0, i), twoChar, str.slice(i + 2, length)]
    }

    if (elements.has(oneChar)) {
      return [str.slice(0, i), oneChar, str.slice(i + 1, length)]
    }
  }
  return ['', '', '']
}
