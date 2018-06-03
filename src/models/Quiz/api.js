import firebase from 'firebase'

export const setProgress = (uid, progress) => firebase.database()
  .ref(`users/${uid}/progress`)
  .set(progress)

export const getQuiz = id => firebase.database()
  .ref(`quizzes/${id}`)
  .once('value')
  .then(data => ({
    ...data.val(),
    id,
  }))

export const getProgress = uid => firebase.database()
  .ref(`users/${uid}/progress`)
  .once('value')
  .then(data => data.val())
