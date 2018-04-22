import React from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'
import * as firebase from 'firebase'
import {
  apiKey,
  authDomain,
  databaseURL,
  messagingSenderId,
  projectId,
  storageBucket,
} from 'react-native-dotenv'

import store from 'src/store'
import Screens from 'src/screens'
import ViewGrow from 'src/components/ViewGrow'

const config = {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  projectId,
  messagingSenderId,
}
firebase.initializeApp(config)

class Application extends React.PureComponent {
  state = {
    isReady: false,
  }

  componentDidMount() {
    Font
      .loadAsync({
        /* eslint-disable global-require, quote-props */
        'Dimbo-Italic': require('src/lib/fonts/Dimbo-Italic.ttf'),
        'Dimbo': require('src/lib/fonts/Dimbo-Regular.ttf'),
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
