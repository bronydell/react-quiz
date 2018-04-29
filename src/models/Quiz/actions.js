import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Quiz'
}

export const resetStorage = new Action('resetStorage')

export const setQuestion = new Action('setQuestion', {
  success: id => ({ id }),
})

export const setProgress = new Action('setProgress', {
  success: progress => ({ progress }),
})
