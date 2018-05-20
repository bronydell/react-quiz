import * as firebase from 'firebase'

export const getQuiz = id => firebase.database()
  .ref(`quizzes/${id}`)
  .once('value')
  .then(data => data.val())

export const getQuizes = () => {
  const ref = firebase.database()
    .ref()
    .child('quizzes')
  // let request = ref.limitToFirst(count)
  // if (lastItem !== null) {
  //   request = ref.orderByKey().startAt(lastItem)
  //     .limitToFirst(count)
  // }
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
