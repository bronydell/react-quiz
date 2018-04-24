import * as firebase from 'firebase'

export const getQuizes = (lastItem, count = 15) => {
  const ref = firebase.database()
    .ref()
    .child('quizes')
  let request = ref.limitToFirst(count)
  if (lastItem !== null) {
    request = ref.orderByKey().startAt(lastItem)
      .limitToFirst(count)
  }
  return request.once('value').then((data) => {
    const searchResults = []
    data.forEach((child) => {
      searchResults.push(child.val())
    })
    return searchResults
  })
}
