import { StackNavigator, SwitchNavigator } from 'react-navigation'

import MenuScreen from 'src/screens/Menu'
import ProfileScreen from 'src/screens/Profile'
import QuizCatalogScreen from 'src/screens/QuizCatalog'
import QuizDetailsScreen from 'src/screens/QuizDetails'
import QuizScreen from 'src/screens/Quiz'

const navigationOptions = {
  headerMode: 'None',
}

const ApplicationStack = StackNavigator({
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

const QuizStack = StackNavigator({
  Game: {
    screen: QuizScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'Game',
})

export default SwitchNavigator(
  {
    Application: ApplicationStack,
    Quiz: QuizStack,
  },
  {
    initialRouteName: 'Application',
  },
)
