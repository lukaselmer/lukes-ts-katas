import { consoleLog } from '../logger'

export function ledClock(value: number) {
  if (value === 1) {
    consoleLog('')
    consoleLog('   ╗')
    consoleLog('   ║')
    consoleLog('   ║')
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
  if (value === 8) {
    consoleLog('')
    consoleLog('╔══╗')
    consoleLog('╠══╣')
    consoleLog('╚══╝')
    consoleLog('')
  }
}
