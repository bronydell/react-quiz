import React from 'react'
import { shallow } from 'enzyme'

import Component from './'

const requiredProps = {
  onPress: () => {},
  id: '',
}

it('is rendered', () => {
  shallow(pug`Component(...requiredProps)`)
})

it('renders items with correct selected attribute', () => {
  const data = [{ key: 'a', title: 'a' }, { key: 'b', title: 'b' }, { key: 'c', title: 'c' }]
  const selected = ['c', 'a']

  const wrapper = shallow(pug`Component(...requiredProps data=data selected=selected)`)
  const Item = wrapper.prop('renderItem')

  expect(shallow(pug`Item( item=data[0] )`)).toHaveProp('selected', true)
  expect(shallow(pug`Item( item=data[1] )`)).toHaveProp('selected', false)
  expect(shallow(pug`Item( item=data[2] )`)).toHaveProp('selected', true)
})
