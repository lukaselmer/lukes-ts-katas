import { consoleLog } from '../logger'
import { truthy } from '../utils/array'

export function ledClock(value: number) {
  if (value === 0) {
    consoleLog('')
    singleDigit(0).forEach((line) => consoleLog(line))
    consoleLog('')
  }
  if (value === 1) {
    consoleLog('')
    consoleLog('   ╗')
    consoleLog('   ║')
    consoleLog('   ╝')
    consoleLog('')
  }
  if (value === 2) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╔══╝')
    consoleLog('╚══╝')
    consoleLog('')
  }
  if (value === 3) {
    consoleLog('')
    consoleLog(' ══╗')
    consoleLog('  ═╣')
    consoleLog(' ══╝')
    consoleLog('')
  }
  if (value === 4) {
    consoleLog('')
    consoleLog('╔  ╗')
    consoleLog('╚══╣')
    consoleLog('   ╝')
    consoleLog('')
  }
  if (value === 5) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╚══╗')
    consoleLog('╚══╝')
    consoleLog('')
  }
  if (value === 6) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╠══╗')
    consoleLog('╚══╝')
    consoleLog('')
  }
  if (value === 7) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('   ║')
    consoleLog('   ╝')
    consoleLog('')
  }
  if (value === 8) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╠══╣')
    consoleLog('╚══╝')
    consoleLog('')
  }
  if (value === 9) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╚══╣')
    consoleLog('╚══╝')
    consoleLog('')
  }
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

splitDigits()
