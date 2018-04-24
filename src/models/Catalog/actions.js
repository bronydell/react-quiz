import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Profile'
}

export const fetchQuizes = new Action('fetchQuizes', {
  init: lastItem => ({ lastItem }),
  success: list => ({ list }),
  failure: error => ({ error }),
})
