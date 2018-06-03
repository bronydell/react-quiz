import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Catalog'
}

export const fetchQuizes = new Action('fetchQuizes', {
  init: filterText => ({ filterText }),
  success: list => ({ list }),
  failure: error => ({ error }),
})

export const setQuiz = new Action('setQuiz', {
  init: id => ({ id }),
  success: quiz => ({ quiz }),
})

export const setLoading = new Action('setLoading', {
  success: loading => ({ loading }),
})
