import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Quiz'
}

export const resetStorage = new Action('resetStorage')

export const syncProgress = new Action('syncProgress')
export const getProgress = new Action('getProgress')
export const resetProgress = new Action('resetProgress')

export const setQuestion = new Action('setQuestion', {
  success: id => ({ id }),
})

export const setQuiz = new Action('setQuiz', {
  init: id => ({ id }),
  success: quiz => ({ quiz }),
})

export const setProgress = new Action('setProgress', {
  success: progress => ({ progress }),
})
