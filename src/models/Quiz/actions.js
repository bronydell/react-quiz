import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Quiz'
}

export const setQuestion = new Action('setQuestion', {
  success: id => ({ id }),
})
