import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Catalog'
}

export const getMyQuizzes = new Action('getMyQuizzes', {
  success: list => ({ list }),
  failure: error => ({ error }),
})

export const getQuiz = new Action('getQuiz', {
  init: id => ({ id }),
  success: quiz => ({ quiz }),
})
