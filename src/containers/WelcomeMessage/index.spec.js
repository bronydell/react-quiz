import React from 'react'
import { shallow } from 'enzyme'

import { ContainerWelcomeMessage as Component } from './'

it('is rendered', () => {
  shallow(pug`Component`)
})
