import { StackNavigator } from 'react-navigation'

import MenuScreen from 'src/screens/Menu'
import ProfileScreen from 'src/screens/Profile'
import QuizCatalogScreen from 'src/screens/QuizCatalog'
import QuizDetailsScreen from 'src/screens/QuizDetails'

const navigationOptions = {
  headerMode: 'None',
}

const RootNavigator = StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  QuizCatalog: {
    screen: QuizCatalogScreen,
  },
  QuizDetails: {
    screen: QuizDetailsScreen,
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
