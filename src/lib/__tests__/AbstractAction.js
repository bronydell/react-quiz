import AbstractAction from 'src/lib/AbstractAction'

import _ from 'lodash'

describe('lib/AbstractAction', () => {
  it('is exported', () => {
    expect(AbstractAction).toBeDefined()
  })

  describe('creates instance which', () => {
    const name = '$$NAME'
    const action = new AbstractAction(name)

    it('contains INIT_TYPE', () => {
      expect(action.INIT_TYPE).toEqual(expect.stringContaining(name))
      expect(action.INIT_TYPE).toEqual(expect.stringContaining('INIT'))
    })

    it('contains SUCCESS_TYPE', () => {
      expect(action.SUCCESS_TYPE).toEqual(expect.stringContaining(name))
      expect(action.SUCCESS_TYPE).toEqual(expect.stringContaining('SUCCESS'))
    })

    it('contains FAILURE_TYPE', () => {
      expect(action.FAILURE_TYPE).toEqual(expect.stringContaining(name))
      expect(action.FAILURE_TYPE).toEqual(expect.stringContaining('FAILURE'))
    })

    it('contains "init" action creator', () => {
      expect(_.isFunction(action.init)).toBeTruthy()
    })

    it('contains "success" action creator', () => {
      expect(_.isFunction(action.success)).toBeTruthy()
    })

    it('contains "failure" action creator', () => {
      expect(_.isFunction(action.failure)).toBeTruthy()
    })
  })

  describe('creates instance from inherited class which', () => {
    const namespace = '6]pkNZ2?htVtX*3CcAziB2adfhmW(8dv'
    const name = 'nNkU49@8cNEnktM7nJKpBAAbqL2>]zQ.'

    class Action extends AbstractAction {
      _namespace = namespace
    }

    const action = new Action(name)

    // We check only one type just because it's enough here

    it('contains SUCCESS_TYPE', () => {
      expect(action.SUCCESS_TYPE).toEqual(expect.stringContaining(namespace))
      expect(action.SUCCESS_TYPE).toEqual(expect.stringContaining(name))
      expect(action.SUCCESS_TYPE).toEqual(expect.stringContaining('SUCCESS'))
    })
  })

  describe('creates instance with options which', () => {
    const name = '$$NAME'
    const inputOne = '$$input_one'
    const inputTwo = '$$input_two'
    const expectedPayload = { one: inputOne, two: inputTwo }
    const action = new AbstractAction(name, {
      init: (one, two) => ({ one, two }),
      success: (one, two) => ({ one, two }),
      failure: (one, two) => ({ one, two }),
    })

    it('has correct payload in init action', () => {
      const result = action.init(inputOne, inputTwo)

      expect(result.payload).toEqual(expectedPayload)
    })

    it('has correct payload in success action', () => {
      const result = action.success(inputOne, inputTwo)

      expect(result.payload).toEqual(expectedPayload)
    })

    it('has correct payload in failure action', () => {
      const result = action.failure(inputOne, inputTwo)

      expect(result.payload).toEqual(expectedPayload)
    })
  })
})
