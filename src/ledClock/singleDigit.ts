import { truthy } from '../utils/array'

let _splitDigitsCache: string[][] | undefined

export function singleDigit(num: number) {
  if (num < 0 || num > 9) throw new Error(`Invalid digit: ${num}`)
  return splitDigits()[num]
}
function splitDigits() {
  if (!_splitDigitsCache) return initSingleDigit()
  return _splitDigitsCache
}

function initSingleDigit() {
  _splitDigitsCache = calculateSplitDigits()
  return _splitDigitsCache
}

function calculateSplitDigits() {
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
