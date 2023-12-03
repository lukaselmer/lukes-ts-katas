import { ledClock } from './src/ledClock/ledClock'
import { initLogger } from './src/logger'

initLogger('real')

const defaultNumber = 351
const value = process.argv.length > 2 ? parseInt(process.argv[2], 10) : defaultNumber

ledClock(value)
