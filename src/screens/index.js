import { StackNavigator } from 'react-navigation'

import WelcomeScreen from 'src/screens/Welcome'

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: 'Welcome',
    },
  },
}, {
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerBackTitle: 'Back',
  },
})

export default RootNavigator
