import { consoleLog } from '../logger'
import { truthy } from '../utils/array'

export function ledClock(value: number) {
  consoleLog('')
  singleDigit(value).forEach((line) => consoleLog(line))
  consoleLog('')
}

function singleDigit(num: number) {
  if (num < 0 || num > 9) throw new Error(`Invalid digit: ${num}`)
  return splitDigits()[num]
}

function splitDigits() {
  const lines = rawDigits.split('\n').filter(truthy)
  const height = lines.length / 10
  const singleDigits: string[][] = []
  lines.forEach((line, index) => {
    const digitIndex = Math.floor(index / height)
    singleDigits[digitIndex] = singleDigits[digitIndex] || []
    singleDigits[digitIndex].push(line)
  })
  return singleDigits
}

const rawDigits = `
╔══╗
║  ║
╚══╝
   ╗
   ║
   ╝
╔══╗
╔══╝
╚══╝
 ══╗
  ═╣
 ══╝
╔  ╗
╚══╣
   ╝
╔══╗
╚══╗
╚══╝
╔══╗
╠══╗
╚══╝
╔══╗
   ║
   ╝
╔══╗
╠══╣
╚══╝
╔══╗
╚══╣
╚══╝
`
