import { consoleLog } from '../logger'

export function ledClock(value: number) {
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

function splitDigits() {
  console.log(rawDigits.split('\n'))
}

const rawDigits = `
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
