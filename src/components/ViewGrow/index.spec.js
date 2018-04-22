import React from 'react'
import { shallow } from 'enzyme'

import Component from './'

it('is rendered', () => {
  shallow(pug`Component`)
})

it('renders children', () => {
  const rendered = shallow(pug`Component Hello World`)

  expect(rendered).toMatchSnapshot()
})
