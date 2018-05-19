import React from 'react'
import { shallow } from 'enzyme'

import Container, { ALL_KEY } from './'

const requiredProps = {
  onChange: jest.fn(),
}

const buildItem = (key, title) => ({ key, title })

it('is rendered', () => {
  shallow(pug`Container(...requiredProps)`)
})

describe('when clicking on items', () => {
  let onChange
  const data = [buildItem('a', 'A'), buildItem('b', 'B'), buildItem('c', 'C')]

  beforeEach(() => {
    onChange = jest.fn()
  })

  describe('when single selection mode on', () => {
    it('passes single item', () => {
      const selected = ['a']
      const wrapper = shallow(pug`Container(...requiredProps data=data selected=selected onChange=onChange)`)

      wrapper.prop('onItemPress')('a')
      wrapper.prop('onItemPress')('b')

      expect(onChange).toHaveBeenCalledWith(['a'])
      expect(onChange).toHaveBeenCalledWith(['b'])
      expect(onChange).toHaveBeenCalledTimes(2)
    })
  })

  describe('when multiple selection mode on', () => {
    const props = { ...requiredProps, data, multiple: true }

    it('passes selected items', () => {
      const wrapper = shallow(pug`Container(...props onChange=onChange)`)

      wrapper.prop('onItemPress')('a')

      expect(onChange).toHaveBeenCalledWith(['a'])
    })

    it('passes selected items including previous', () => {
      const selected = ['a']
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')('b')

      expect(onChange).toHaveBeenCalledWith(['a', 'b'])
    })

    it('toggles selected items', () => {
      const selected = ['a', 'b']
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')('a')

      expect(onChange).toHaveBeenCalledWith(['b'])
    })

    it('adds ALL_KEY when all items are selected', () => {
      const selected = ['a', 'b']
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')('c')

      expect(onChange).toHaveBeenCalledWith(['a', 'b', 'c', ALL_KEY])
    })

    it('removes ALL_KEY when at least one item has been unselected', () => {
      const selected = ['a', 'b', 'c', ALL_KEY]
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')('b')

      expect(onChange).toHaveBeenCalledWith(['a', 'c'])
    })

    it('selects all items after clicking on ALL_KEY', () => {
      const selected = ['a']
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')(ALL_KEY)

      expect(onChange).toHaveBeenCalledWith(['a', 'b', 'c', ALL_KEY])
    })

    it('unselects all items after clicking on ALL_KEY if all items are selected', () => {
      const selected = ['a', 'b', 'c', ALL_KEY]
      const wrapper = shallow(pug`Container(...props onChange=onChange selected=selected)`)

      wrapper.prop('onItemPress')(ALL_KEY)

      expect(onChange).toHaveBeenCalledWith([])
    })
  })
})
