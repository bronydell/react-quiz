import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Catalog'
}

export const fetchQuizes = new Action('fetchQuizes', {
  init: lastItem => ({ lastItem }),
  success: list => ({ list }),
  failure: error => ({ error }),
})

export const setQuiz = new Action('setQuiz', {
  init: id => ({ id }),
  success: quiz => ({ quiz }),
})
