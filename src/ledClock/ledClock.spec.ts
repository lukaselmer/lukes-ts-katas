import { beforeEach, beforeAll, describe, expect, it } from 'vitest'
import { discardLogs, fakeLogs, initLogger } from '../logger'
import { ledClock } from './ledClock'

beforeAll(() => initLogger('fake'))
beforeEach(discardLogs)

describe('ledClock', () => {
  describe('single digits', () => {
    it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])('generates the correct output for digit %s', (num) => {
      ledClock(num)
      expect(fakeLogs()).toMatchSnapshot()
    })

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

  it('generates the correct output for digit 351', () => {
    expect(fakeLogs()).toMatchInlineSnapshot('""')
    ledClock(351)
    expect(fakeLogs()).toMatchInlineSnapshot(`
      "
       ══╗ ╔══╗    ╗
        ═╣ ╚══╗    ║
       ══╝ ╚══╝    ╝
      "
    `)
  })
})
