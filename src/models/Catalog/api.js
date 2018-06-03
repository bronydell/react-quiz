import * as firebase from 'firebase'

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
