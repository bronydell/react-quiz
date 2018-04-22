import { AsyncStorage } from 'react-native'

const LOGIN_KEY = '@ReactQuiz:login'
const PASSWORD_KEY = '@ReactQuiz:password'

export const getLogin = async () => {
  const login = await AsyncStorage.getItem(LOGIN_KEY)
  return login
}

export const getPassword = async () => {
  const password = await AsyncStorage.getItem(PASSWORD_KEY)
  return password
}

export const setLogin = async (login) => {
  if (login === null) {
    await AsyncStorage.removeItem(LOGIN_KEY)
  } else {
    await AsyncStorage.setItem(LOGIN_KEY, login)
  }
}

export const setPassword = async (password) => {
  if (password === null) {
    await AsyncStorage.removeItem(PASSWORD_KEY)
  } else {
    await AsyncStorage.setItem(PASSWORD_KEY, password)
  }
}
