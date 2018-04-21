import React from 'react'
import { shallow } from 'enzyme'

import Component from './'

const requiredProps = {
  action: jest.fn(),
}

it('is rendered', () => {
  shallow(pug`Component(...requiredProps)`)
})

it('button executes action', () => {
  const action = jest.fn()
  const rendered = shallow(pug`Component(...requiredProps action=action)`)

  rendered.find('Button').simulate('press')

  expect(action).toHaveBeenCalledTimes(1)
})
