import * as firebase from 'firebase'

export const fetchQuiz = id => firebase.database()
  .ref(`quizzes/${id}`)
  .once('value')
  .then(data => data.val())

export const fetchMyQuizzes = () => firebase.database()
  .ref()
  .child('quizzes')
  .orderByChild('author')
  .equalTo(firebase.auth().currentUser.uid)
  .once('value')
  .then((data) => {
    const searchResults = []
    data.forEach((child) => {
      const result = child.val()
      delete result.questions
      result.key = child.key
      searchResults.push(result)
    })
    return searchResults
  })
