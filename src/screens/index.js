import { StackNavigator } from 'react-navigation'

import MenuScreen from 'src/screens/Menu'
import ProfileScreen from 'src/screens/Profile'

const navigationOptions = {
  headerMode: 'None',
}

const RootNavigator = StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'Menu',
})

export default RootNavigator
