import React from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'

import store from 'src/store'
import Screens from 'src/screens'
import ViewGrow from 'src/components/ViewGrow'

class Application extends React.PureComponent {
  state = {
    isReady: false,
  }

  componentDidMount() {
    Font
      .loadAsync({
        /* eslint-disable global-require, quote-props */
        'Roboto-Black': require('src/lib/fonts/Roboto-Black.ttf'),
        'Roboto-BlackItalic': require('src/lib/fonts/Roboto-BlackItalic.ttf'),
        'Roboto-Bold': require('src/lib/fonts/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('src/lib/fonts/Roboto-BoldItalic.ttf'),
        'Roboto-Light': require('src/lib/fonts/Roboto-Light.ttf'),
        'Roboto-LightItalic': require('src/lib/fonts/Roboto-LightItalic.ttf'),
        'Roboto-Medium': require('src/lib/fonts/Roboto-Medium.ttf'),
        'Roboto-MediumItalic': require('src/lib/fonts/Roboto-MediumItalic.ttf'),
        'Roboto': require('src/lib/fonts/Roboto-Regular.ttf'),
        'Roboto-Italic': require('src/lib/fonts/Roboto-RegularItalic.ttf'),
        'Roboto-Thin': require('src/lib/fonts/Roboto-Thin.ttf'),
        'Roboto-ThinItalic': require('src/lib/fonts/Roboto-ThinItalic.ttf'),
        /* eslint-enable */
      })
      .then(() => this.setState({ isReady: true }))
  }

  render() {
    return pug`
      Provider(store=store)
        ViewGrow
          if this.state.isReady
            Screens
    `
  }
}

export default Application
