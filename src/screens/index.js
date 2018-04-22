import { StackNavigator } from 'react-navigation'

import WelcomeScreen from 'src/screens/Welcome'

const navigationOptions = {
  headerMode: 'None',
}

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions,
  },
}, {
  initialRouteName: 'Welcome',
})

export default RootNavigator
