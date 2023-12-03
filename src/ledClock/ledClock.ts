import { consoleLog } from '../logger'
import { singleDigit } from './singleDigit'

export function ledClock(value: number) {
  consoleLog('')
  singleDigit(value).forEach((line) => consoleLog(line))
  consoleLog('')
}
