import React from 'react'
import { shallow } from 'enzyme'

import Component from './'

const requiredProps = {
  toggleModal: jest.fn(),
}

it('is rendered correctly when requiredProps are passed', () => {
  const wrapper = shallow(pug`Component(...requiredProps)`)

  expect(wrapper).toMatchSnapshot()
})

it('renders component with clickable Background if needed param is set up to true', () => {
  const wrapper = shallow(pug`Component(...requiredProps)`)

  expect(wrapper.find('TouchableWithoutFeedback').at(0)).toHaveProp('onPress')
})

it('clicks on content does not close any action popup', () => {
  const wrapper = shallow(pug`Component(...requiredProps)`)
  const selector = 'TouchableWithoutFeedback'

  expect(wrapper.find(selector).at(0).find(selector)).not.toHaveProp('onPress')
})
