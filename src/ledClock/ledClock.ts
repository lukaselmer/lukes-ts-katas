import { consoleLog } from '../logger'
import { singleDigit } from './singleDigit'

export function ledClock(value: number) {
  const digits = value
    .toString()
    .split('')
    .map((digit) => parseInt(digit, 10))
  console.log(digits)
  consoleLog('')
  singleDigit(value).forEach((line) => consoleLog(line))
  consoleLog('')
}
