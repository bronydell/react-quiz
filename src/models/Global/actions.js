import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Global'
}

export const setError = new Action('setError', {
  success: error => ({ error }),
})
