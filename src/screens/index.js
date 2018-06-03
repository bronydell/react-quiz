import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import MenuScreen from 'src/screens/Menu'
import MyQuizzesScreen from 'src/screens/MyQuizzes'
import Intro from 'src/screens/Intro'
import ProfileScreen from 'src/screens/Profile'
import QuizCatalogScreen from 'src/screens/QuizCatalog'
import QuizResultScreen from 'src/screens/QuizResult'
import QuizEditorScreen from 'src/screens/QuizEditor'
import QuizDetailsScreen from 'src/screens/QuizDetails'
import QuestionEditorScreen from 'src/screens/QuestionEditor'
import QuizScreen from 'src/screens/Quiz'

const navigationOptions = {
  headerMode: 'None',
}

const ApplicationStack = createStackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  QuizCatalog: {
    screen: QuizCatalogScreen,
  },
  QuizDetails: {
    screen: QuizDetailsScreen,
  },
  QuizEditor: {
    screen: QuizEditorScreen,
  },
  QuestionEditor: {
    screen: QuestionEditorScreen,
  },
  MyQuizzes: {
    screen: MyQuizzesScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'Menu',
})

const QuizStack = createStackNavigator({
  Game: {
    screen: QuizScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'Game',
})

const IntroStack = createStackNavigator({
  Intro: {
    screen: Intro,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'Intro',
})

const ResultStack = createStackNavigator({
  QuizResult: {
    screen: QuizResultScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions,
  initialRouteName: 'QuizResult',
})

export default createSwitchNavigator(
  {
    Intro: IntroStack,
    Application: ApplicationStack,
    Quiz: QuizStack,
    Result: ResultStack,
  },
  {
    initialRouteName: 'Intro',
  },
)
