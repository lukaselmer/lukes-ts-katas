import { consoleLog } from '../logger'
import { times } from '../utils/array'
import { singleDigit } from './singleDigit'

export function ledClock(value: number) {
  const digits = value
    .toString()
    .split('')
    .map((digit) => parseInt(digit, 10))

  const height = singleDigit(0).length
  times(height, (index) => {
    const fullLine = digits.map((digit) => singleDigit(digit)[index])
  })

  consoleLog('')
  singleDigit(value).forEach((line) => consoleLog(line))
  consoleLog('')
}
