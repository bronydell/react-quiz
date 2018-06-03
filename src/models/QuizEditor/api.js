import * as firebase from 'firebase'

export const fetchQuiz = id => firebase.database()
  .ref(`quizzes/${id}`)
  .once('value')
  .then((data) => {
    const quiz = data.val()
    quiz.key = data.key
    return quiz
  })

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

export const putQuiz = (id, quiz) => {
  let newId = id
  if (id == null) {
    newId = firebase.database().ref().child('quiz').push().key
  }
  firebase.database()
    .ref(`quizzes/${newId}`)
    .set(quiz)
}
