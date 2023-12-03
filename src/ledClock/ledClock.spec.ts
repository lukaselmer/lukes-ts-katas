import { beforeEach, beforeAll, describe, expect, it } from 'vitest'
import { discardLogs, fakeLogs, initLogger } from '../logger'
import { ledClock } from './ledClock'

beforeAll(() => initLogger('fake'))
beforeEach(discardLogs)

describe('ledClock', () => {
  describe('single digits', () => {
    it('generates the correct output for digit 3', () => {
      expect(fakeLogs()).toMatchInlineSnapshot('""')
      ledClock(3)
      expect(fakeLogs()).toMatchInlineSnapshot(`
      "
       ══╗
        ═╣
       ══╝
      "
    `)
    })

    it('generates the correct output for digit 8', () => {
      expect(fakeLogs()).toMatchInlineSnapshot('""')
      ledClock(8)
      expect(fakeLogs()).toMatchInlineSnapshot(`
      "
      ╔══╗
      ╠══╣
      ╚══╝
      "
    `)
    })
  })

  // it('generates the correct output for digit 351', () => {
  //   expect(fakeLogs()).toMatchInlineSnapshot('""')
  //   ledClock(351)
  //   expect(fakeLogs()).toMatchInlineSnapshot('"led-clock: 351"')
  // })
})
