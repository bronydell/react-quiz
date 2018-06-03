import * as firebase from 'firebase'

export const getQuiz = id => firebase.database()
  .ref(`quizzes/${id}`)
  .once('value')
  .then(data => data.val())

export const getQuizes = (filterText) => {
  let ref = firebase.database()
    .ref()
    .child('quizzes')
  if (filterText) {
    ref = ref
      .orderByChild('title')
      .startAt(filterText)
  }
  return ref.once('value').then((data) => {
    const searchResults = []
    data.forEach((child) => {
      const result = child.val()
      delete result.questions
      result.key = child.key
      searchResults.push(result)
    })
    return searchResults
  })
}
